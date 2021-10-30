const BackHome = () => {
      let homeApp = "";

      if(process.env.REACT_APP_HOME){
            homeApp = process.env.REACT_APP_HOME;
      }else{
            homeApp = "http://localhost:3000/";
      }
      window.location.href = homeApp;
};

export default BackHome;