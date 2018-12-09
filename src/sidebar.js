import React from 'react';
import ReactDOM from 'react-dom';


class Layout extends React.Component {
	state = {
		showSidebar: false
	}

	toggleSidebar = () => {
		this.setState({
			showSidebar: !this.state.showSidebar
		});
	}

	render() {
		const { showSidebar } = this.state;
		return (
			<div className="layout">
				{showSidebar && 
					<Sidebar
						onHide={this.toggleSidebar}>
						sidebar
					</Sidebar>}
				<Content
					isSidebarVisible={showSidebar}
					onShowSidebar={this.toggleSidebar}>
					content
				</Content>
			</div>
		);
	}
}

const Content = ({
	children,
	isSidebarVisible,
	onShowSidebar
}) => (
	<div className="content">
		{children}
		{!isSidebarVisible && (
			<button onClick={onShowSidebar}>
				Show
			</button>
		)}
	</div>
);

const Sidebar = ({
	onHide,
	children
}) => (
	<div className="sidebar">
		{children}
		<button onClick={onHide}>
			Hide
		</button>
	</div>
);

export { Layout, Content, Sidebar };