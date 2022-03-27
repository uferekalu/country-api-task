import { makeStyles } from '@mui/styles'

export default makeStyles({
    countryPage: {
        maxWidth: '1440px',
        margin: '30px auto',
        padding: '20px 2%'
    },
    backBtn: {
        display: 'inline-block',
        textDecoration: 'none',
        maxWidth: '150px',
        fontSize: '15px',
        padding: '10px 30px',
        borderRadius: '6px',
        boxShadow: '0 0 4px 0px rgb(0 0 0 /24%)',
        color: '#000',
        transition: 'all 0.2s',
        '& svg': {
            verticalAlign: '-2px'
        }
    },
    countryPageDisplay: {
        padding: '50px 0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%'
    },
    countryFlag: {
        width: '50%',
        maxHeight: '500px',
        height: '100%'
    }
})