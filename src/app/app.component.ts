import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public navigation: any = [
    {url: '/#', name: 'HOME'},
    {url: '/#', name: 'OUR REQUIREMENT'},
    {url: '/#', name: 'WE OFFER'},
    {url: '/#', name: 'WE OFFER'},
    {url: '/#', name: 'CONTACTS'}
  ];
  public requirementList: any = [
    {
      img: 'assets/icons/requirements/2.png',
      text: `Front end - HTML5 and CSS3 are \r\n
        main technology of the UI code \r\n
        (CSS3 can replace JS in many cases).`
    },
    {
      img: 'assets/icons/requirements/1.png',
      text: 'Pixel-Perfect level of UI - must be accurate on pixel level to PSD design.'
    },
    {
      img: 'assets/icons/requirements/3.png',
      text: 'Cannot be any copyright mark, link, name, signature, email,' +
        ' images in any of the code files, files names, project images and any other project asset.'
    },
    {
      img: 'assets/icons/requirements/4.png',
      text: 'The developer cannot use any modules and plugins which are not free to use & with free license of use.'
    },
    {
      img: 'assets/icons/requirements/5.png',
      text: 'Resolutions ready - link - need to include all desktops, including large screens and resolutions.'
    },
    {
      img: 'assets/icons/requirements/6.png',
      text: 'Code - classes, IDís and scripts names - required to be named properly - for future editing.'
    },
    {
      img: 'assets/icons/requirements/7.png',
      text: 'Sliders with layers & float text required to fit for any responsive layout.'
    },
    {
      img: 'assets/icons/requirements/8.png',
      text: '1 element for all layouts - Header, Footer, Body, Menu, fields & forms - cannot have duplicate elements' +
        ' for desktop and mobile (you required to do 1 elements which will fit to all layouts properly).'
    }
  ];

  public helpDetails = [
    {num: 1, detail: `NAME FONTS: Cosmic Sans MS TEXT COLOR #272f2f COLOR BUTTONS (GRADIENT) FROM #FB6A4E TO #FF606A`},
    {num: 2, detail: `Clean, robust, dynamic & organized  code are essentials!`},
    {num: 3,
      detail: `File names need to be clear and logic.
        Back-end files and folders organization - Images, CSS, JS,
        Fonts, and any other project asset - required to be in dedicated folders.`},
    {
      num: 4,
      detail: `Use hover effects,
        animations and fields validations (e.g. emails, ID, names, phones, etc..)
        where possible, keep in mind that sometimes the designers forget to create them.`},
  ];

  public offerList = [
    {img: '', imgOut: 'assets/icons/offers/2.png', imgOn: 'assets/icons/offers/hover2.png', text: 'Career growth'},
    {img: '', imgOut: 'assets/icons/offers/1.png', imgOn: 'assets/icons/offers/hover1.png', text: 'Flexible working schedule'},
    {img: '', imgOut: 'assets/icons/offers/3.png', imgOn: 'assets/icons/offers/hover3.png', text: 'Comfortable workplace'},
    {
      img: '',
      imgOut: 'assets/icons/offers/4.png',
      imgOn: 'assets/icons/offers/hover4.png',
      text: 'Competitive salary  according to the  qualifications'
    },
    {img: '', imgOut: 'assets/icons/offers/5.png', imgOn: 'assets/icons/offers/hover5.png', text: 'Corporate leisure activities'},
    {img: '', imgOut: 'assets/icons/offers/6.png', imgOn: 'assets/icons/offers/hover6.png', text: 'English lessons'}
  ];
  public socials = [
    {img: '', imgOut: 'assets/icons/social_network/linkedin.png', imgOn: 'assets/icons/social_network/linkedin_active.png', url: '/#'},
    {img: '', imgOut: 'assets/icons/social_network/twitter.png', imgOn: 'assets/icons/social_network/twitter_active.png', url: '/#'},
    {img: '', imgOut: 'assets/icons/social_network/fb.png', imgOn: 'assets/icons/social_network/fb_active.png', url: '/#'},
  ];
}
