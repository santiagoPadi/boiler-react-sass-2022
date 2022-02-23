import './loading.scss'

const Loading = ({ style }: { style?: object }) => {
	return (
		<div className="spinner" style={style}>
			<div className="bounce1"></div>
			<div className="bounce2"></div>
			<div className="bounce3"></div>
		</div>
	)
}

export default Loading
