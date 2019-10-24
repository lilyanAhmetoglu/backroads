import React from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import Banner from "../components/Banner"
const contact = () => {
  return (
    <Layout>
      <StyledHero>
        <Banner
          title="Contact us"
          info="Contact us if you faced any problems"
        ></Banner>
      </StyledHero>
      <section className="container-fluid">
        <div className="row map">
          <div className="col-md-12">
            <div className="mapouter">
              <div className="gmap_canvas">
                <iframe
                  height="350"
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?q=MERCURE%20ISTANBUL%20THE%20PLAZA%20BOSPHORUS%20%20Barbaros%20Bulvari%20No%20165%20Balmumcu%20Besiktas%2C%2034349%20Istanbul&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="col-md-12">
            <div class="contact_message content">
              <h3>contact us</h3>
              <p>
                Hello Qimia Team, if you faced any problem during the tour
                please feel free to contact one of Istanbul Office team down
                below. Have fun
              </p>
              <ul>
                <li>
                  <b>hotel Address</b> : MERCURE ISTANBUL THE PLAZA BOSPHORUS
                  Barbaros Bulvari No 165 Balmumcu Besiktas, 34349 Istanbul
                </li>
                <li>
                  <b>Eren:</b> +90 542 412 02 31
                </li>
                <li>
                  <b>Ata:</b> +90 536 772 93 92
                </li>
                <li>
                  <b>Lilyan:</b> +90 553 384 08 94
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default contact
