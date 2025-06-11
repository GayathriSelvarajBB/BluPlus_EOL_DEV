const LoginImages = (props) => {
   const { MainImage } = props;
   return (
      <div className="login-component-image-sec">
         <img
            src={MainImage}
            alt="background"
            className="main-image"
            title="BB Ocean"
         />
      </div>
   );
};

export default LoginImages;
