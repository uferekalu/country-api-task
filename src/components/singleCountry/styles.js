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
    },
    countryPageInfo: {
        width: '40%',
        fontSize: '17px',
        '& span': {
            fontWeight: '600'
        },
        '& p': {
            fontWeight: '300 !important'
        }
    },
    countryPageInfoHeader: {
        fontSize: '35px',
        padding: '20px 0'
    },
    infoFlex: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    infoLeft: {
        '& p': {
            linHeight: '34px'
        }
    },
    infoRight: {
        '& p': {
            linHeight: '34px'
        }
    },
    infoBorder: {
        padding: '40px 0',
        '& a': {
            transition: 'all 0.2s',
            color: '#000',
            textDecoration: 'none',
            margin: '5px',
            fontSize: '14px',
            padding: '5px 20px',
            borderRadius: '6px',
            boxShadow: '0 0  4px 0px rgb(0 0 0  / 24%)'
        }
    }, 
    borderCountries: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center'
    }
})