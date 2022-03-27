import { makeStyles } from '@mui/styles'

export default makeStyles({
    main: {
        maxWidth: '1440px',
        margin: '0 auto',
        padding: '0 2%'
    },
    scroll: {
        position: 'fixed',
        bottom: '35px',
        right: '35px',
        cursor: 'pointer',
        fontSize: '38px',
        backgroundColor: 'white',
        color: '#202c37',
        borderRadius: '50%',
        transition: 'all 0.2s'
    },
    filterSelect: {
        height: '48px',
        borderRadius: '5px',
        padding: '0 15px',
        border: '0',
        outline: 0,
        boxShadow: '0 0 4px 0px rgb(0 0 0 /24%)',
        transition: 'all 0.2s',
        backgroundColor: 'white'
    },
    error: {
        backgroundColor: 'white',
        boxShadow: '0.2px 4px 0px rgb(0 0 0 /24%)',
        transition: 'all 0.2s',
        margin: '0.2%',
        padding: '20px 2%',
        textAlign: 'center',
        fontSize: '1.5rem',
        borderRadius: '5px',
        '& svg': {
            verticalAlign: '-4px',
            transition: 'all 0.08s'
        }
    },
    countries: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        margin: '0 2%'
    }
})