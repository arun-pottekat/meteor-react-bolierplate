import React from 'react';
import {mount} from 'react-mounter';
import {MainLayout} from '../../imports/layouts/MainLayout.jsx';
import Home from '../../imports/views/home/Home.jsx';
import ProcmartHome from '../../imports/views/home/ProcmartHome.jsx';

FlowRouter.route('/', {
	action() {
		mount(MainLayout, {
			content: (<Home />)
		})
	}
});

FlowRouter.route("/index",{
	action() {
		mount(MainLayout, {
			content: (<ProcmartHome />)
		})
	}
})