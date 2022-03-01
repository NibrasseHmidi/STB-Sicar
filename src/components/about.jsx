export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
      <div className='section-title'>
          <h2>Présentation STB SICAR</h2>
        </div>
  
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/1.jpeg" className="img-responsive" alt="" />{" "}
          </div>
         
          <div className="col-xs-12 col-md-6">
         
            <div className="about-text">
            
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              <h3>Principes d’investissement</h3> 
              <div className="list-style">
                <div className="col-lg-12 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
                <h3>Modes d’intervention</h3> 
                <div className="col-lg-12 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}> {d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
