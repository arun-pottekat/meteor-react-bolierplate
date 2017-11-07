import React from 'react';
import AutoForm from 'uniforms-bootstrap4/AutoForm';
import AutoField from 'uniforms-bootstrap4/AutoField';
import SubmitField from 'uniforms-bootstrap4/SubmitField';
import {ResolutionSchema} from '../../../collections/resolutions.js';
import {Photos} from '../../../collections/images.js';
import TinyMCE from 'react-tinymce';

export default class AddResolution extends React.Component {
	componentDidMount() {
		this.baseState = this.refs.resolutionForm.state
		dropzone = new Dropzone("form#something", {
			url:"/form-upload",
			maxFiles: 10,
			maxFilesize: 10,
			addRemoveLinks: true,
			dictDefaultMessage: "Click here or Drag & Drop image here to upload",
			dictFileTooBig: "Ahh ! File too BIG",
			accept: function(file, done){
				done()
			},
			init: function() {
				this.on("maxfilesexceeded", function(file){
					Materialize.toast("No more files please!", 2000, "alert-failure");
				});
			}
		});
	}

	addResolution(data) {
		var files = dropzone.getAcceptedFiles()
		var imageObj = []
		if (files.length > 0) {
			files.forEach((file) =>{
				var photoId = Photos.insert(file)
				var photoObj = {
					id: photoId,
					name: file.name
				}

				imageObj.push(photoObj)
			})
		}
		var resolution = data.resolution
		var description = data.description
		Meteor.call("addResolution", resolution, description, imageObj, (error, result) => {
			if (error) {
				Materialize.toast("Cannot create Resolution", 2000, "red")
			}
			else{
				this.refs.resolutionForm.setState(this.baseState)
				files.forEach(function(file){
					dropzone.removeFile(file)
				})	
				Materialize.toast("Successfully created Resolution", 2000, "green")
			}
		})	
	}

	render() {
		return (
			<div>
				<AutoForm 
					ref="resolutionForm"
					type="insert"
					schema={ResolutionSchema} 
					onSubmit={
						(data) => {
							this.addResolution(data)
						}
					} >
					<AutoField name="resolution" />
					<AutoField name="description" />
					<SubmitField />
				</AutoForm>

				<div className="custom-margin-top">
					<form 
						className="dropzone"
						id="something"></form>
				</div>

				<div className="custom-margin-top">
					<TinyMCE
						content="<p>This is the initial content of the editor</p>"
						config={{
							plugins: 'link image code',
							toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code'
						}}
					/>
				</div>
			</div>
		)
	}
}