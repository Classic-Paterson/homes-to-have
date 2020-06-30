import { LitElement, css, html, customElement, property } from 'lit-element';

// For more info on the @pwabuilder/pwainstall component click here https://github.com/pwa-builder/pwa-install
import '@pwabuilder/pwainstall';

@customElement('app-home')
export class AppHome extends LitElement {

  // For more information on using properties in lit-element
  // check out this link https://lit-element.polymer-project.org/guide/properties#declare-with-decorators
  @property() address: string = "87 Conway Road, Paengaroa";
  @property() price: string = "Offers Over $795,000";

  static get styles() {
    return css`
      #welcomeBlock {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
      }

      #welcomeBlock h2 {
        margin-bottom: 0;
      }

      #welcomeBlock p {
        max-width: 60em;
      }

      .main-image{
        width:100%;
        max-width: 60em;
      }

      pwa-install {
        --install-button-color: #3f97a6;
      }

      button {
        cursor: pointer;
      }

      h2{
        font-size: 28px;
        color: #313944;
        font-weight: 900;
      }

      p{
        color: #313944;
        text-align:left;
        display: block;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        font-size: 14px;
      }

      .price_tag{
        font-size: 46px;
        color: #313944;
        font-weight: 800;
        margin-bottom:10px;
      }

      .icon-detail{
        height: 26px;
          width: 26px;
          max-height: 26px;
          max-width: 26px;
      }

      .details-value{
        font-size:20px;
        position: relative;
        bottom: 8px;
      }

      .homes-button {
        display: block;
        border: none;
        box-sizing: border-box;
        background-color: #3f97a6;
        color: #fff;
        padding: 10px 15px;
        border-radius: 2px;
        transition: background-color .2s,color .2s;
        cursor: pointer;
        font-weight: 700;
        font-size: 15px;
        font: 700 14px/1.5 Muli,'Open Sans',"Droid Sans",Helvetica,sans-serif;
    }

      @media(spanning: single-fold-vertical) {
        #welcomeBlock {
          width: 50%;
        }
      }
    `;
  }

  constructor() {
    super();
  }

  firstUpdated() {
    // this method is a lifecycle even in lit-element
    // for more info check out the lit-element docs https://lit-element.polymer-project.org/guide/lifecycle
    console.log('This is your home page');
  }

  share() {
    if ((navigator as any).share) {
      (navigator as any).share({
        title: 'PWABuilder pwa-starter',
        text: 'Check out the PWABuilder pwa-starter!',
        url: 'https://github.com/pwa-builder/pwa-starter',
      })
    }
  }

  render() {
    return html`
      <div>

        <div id="welcomeBlock">

          <img class="main-image" src="assets/images/1.jpg" alt="app icon">
          <h2>${this.address}</h2>
          <div class="price_tag">${this.price}</div>
          <div>
          <img _ngcontent-homes-app-c67="" class="icon-detail" src="assets/images/Bedrooms.svg"><span class="details-value">3</span>
          <img _ngcontent-homes-app-c67="" class="icon-detail" src="assets/images/Bathrooms.svg"><span class="details-value">1</span>
          <img _ngcontent-homes-app-c67="" class="icon-detail" src="assets/images/Car-spaces.svg"><span class="details-value">4</span>
          <img _ngcontent-homes-app-c67="" class="icon-detail" src="assets/images/Floor-area.svg"><span class="details-value">140m2</span>
          <img _ngcontent-homes-app-c67="" class="icon-detail" src="assets/images/Land-area.svg"><span class="details-value">884m2</span>
          </div>
          
          

          <p>
          Desirable in design with plenty of space and style, here is a spectacular near-new family home bursting with modern features and built for entertaining.
          <br/><br/>
          Spacious and light-filled with stunning vaulted ceilings, the open planned kitchen dining and living lead to sizeable outdoor decking and a private back yard. The separate media room offers handy space for a spot of sport or a family movie, and the office grants a perfect work-from-home option.
          <br/><br/>
          The home provides four double bedrooms with a walk-in-robe and ensuite in the master, and stylish main bathroom facilities include a separate shower with dual head-piece and deep-bottom bathtub.
          <br/><br/>
          Internal access dual-car garaging is reached through the separate laundry room extra storage space can be found in the above-garage attic via drop-down stairs.
          <br/><br/>
          Fully fenced the large freehold site provides an easily-managed space in a semi-rural and private setting at the end of a quiet cul-de-sac location.
          <br/><br/>
          To download the full Property Information Pack copy and paste the following link into your web browser and register your details: bit.ly/3dj5VKo
          </p>

          <pwa-install>
            <button class="homes-button">Save ${this.address}</button>
          </pwa-install>
        </div>
      </div>
    `;
  }
}