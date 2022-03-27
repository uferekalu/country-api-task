import { makeStyles } from "@mui/styles";

export default makeStyles({
  media: {
    height: 0,
    paddingTop: "56.25%"
  },
  border: {
    border: "solid"
  },
  fullHeightCard: {
    height: "100%"
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: "15px",
    height: "100%",
    position: "relative"
  },
  grid: {
    display: "flex"
  },
  overlay: {
    position: "absolute",
    top: "20px",
    left: "20px",
    color: "white"
  },
  singleCountry: {
    width: '21%',
    margin: '30px 2%',
    backgroundColor: 'white',
    boxShadow: '0 0 4px 0px rgb(0 0 0 /24%)',
    borderRadius: '5px',
    transition: 'all 0.2s',
    '& a': {
      textDecoration: 'none',
      color: 'hsl(200, 15% 8%)',
      display: 'inline-block'
    }
  },
  countryImg: {
    maxHeight: '180px',
    minHeight: '180px',
    width: '100%',
    borderTopLeftRadius: '5px',
    borderTopRightRadius: '5px'
  },
  countryInfo: {
    padding: '0 20px 20px',
    fontSize: '12px',
  },
  countryInfoHeader: {
    color: '#111517',
    padding: '10px, 0',
    fontSize: '16px',
    marginBottom: '10px'
  },
  countryInfoText: {
    padding: '3px 0'
  }
});
