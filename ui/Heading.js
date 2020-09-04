const Heading = (props) => {
    const { color, text, size } = props;
    return (
        <>
        <h2 className={`HeadingCard ${color} ${size}`}>
          {text}
        </h2>
          
        <style jsx>{`
          .HeadingCard {
            font-family: "exodus-demo-sharpen", serif;
            text-transform: uppercase;
            font-weight: 400;
            line-height: 120%;
          }
    
          .light {
            color: white;
          }
          .dark {
            color: black;
          }

          .large {
              font-size: 1.875rem;
          }
          .small {
              font-size: 1.625rem;
          }
        `}</style>
        </>
    )
};

export default Heading;