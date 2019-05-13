import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
	root: {
		width: 'calc(100% + 2px)',
		maxWidth: 360,
		backgroundColor: theme.palette.background.paper,
		position: 'absolute',
		border: `2px solid ${theme.palette.primary.dark}`,
		marginTop: -2,
		marginLeft: -1,
		zIndex: 100
	},
	container: {
		position: 'relative',
		display: 'flex',
	},
	input: {
		borderColor: theme.palette.primary.dark,
		border: '2px solid',
		padding: 10,
		// color: 'white',
		fontSize: 20,
		background: '#fff',
		color: theme.palette.primary.dark,
		maxWidth: 300,
		width: 250
	},
	inputLeft: {
		marginRight: -1,
		marginLeft: -1
	},
	inputRight: {
		marginLeft: -1,
		marginRight: -1
	},
	search: {
		position: 'relative'
	},
	from: {
		display: 'flex',
		alignItems: 'center'
	},
	code: {
		fontSize: 12,
		color: '#777',
		width: 25
	},
	city: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		alignContent: 'center'
	},
	airport: {
		paddingLeft: 15,
		color: '#555',
		display: 'flex',
		justifyContent: 'space-between'
	},
	name: {
		marginRight: 'auto',
		fontWeight: 800
	},
	country: {
		color: '#777',
		fontSize: 12,
	},
	icon: {
		marginLeft: 10,
		marginRight: 10
	},
	'icon name': {
		color: '#ccc'
	},
}));
