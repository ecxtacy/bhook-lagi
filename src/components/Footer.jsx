


const socials = [
  {
    imageURL: '/icons/icon-facebook.svg',
    link: 'https://www.facebook.com/Moobidesk/',
  },
  {
    imageURL: '/icons/icon-instagram.svg',
    link: 'https://www.instagram.com/moobidesksg/',
  },
  {
    imageURL: '/icons/icon-youtube.svg',
    link: 'https://www.youtube.com/channel/UCYm87D9vyo-5rCAyqaTwjbw',
  },
  {
    imageURL: '/icons/icon-linkedin.svg',
    link: 'https://www.linkedin.com/company-beta/13265722/',
  }
];


const copyright = 'copyright Bhook Lagi';

// will contain the links to pages
const links = [
  {
    text: 'Home',
    url: '/',
  },
  {
    text: 'Products',
    url: '',
  },
  {
    text: 'Industries',
    url: '',
  },
  {
    text: 'Partner',
    url: '',
  },
  {
    text: 'Pricing',
    url: '',
  },
  {
    text: 'About Us',
    url: '/',
  },
  {
    text: 'Blog',
    url: '/',
  },
  {
    text: 'Contact Us',
    url: '/',
  },
];

const FooterBottom = () => {
  return (
    <footer className=" bg-gray-600">
      <div className="2xl:container mx-auto flex flex-col justify-center xl:flex-row gap-6 py-8 px-16">

        <div className="hidden xl:flex text-[0.9rem] text-gray-50 gap-8 justify-center">
          {links.map((link, index) => (
            <a className="text-white no-underline" key={index} href={link.url}>{link.text}</a>
          ))}
        </div>

        {/* socials container */}
        <div className="flex gap-4 mx-auto">
          {socials.map((social) => (
            <a key={social.link} href={social.link} className="text-white no-underline">
              <img
                className="w-5 h-5"
                src={social.imageURL}
                alt={social.imageURL}
                key={social.imageURL}
                width={200} height={200}
              />
            </a>
          ))}
        </div>

        <div>
          <p className="text-[1rem] text-gray-50 text-center">{copyright}</p>
        </div>
      </div>
    </footer>
  )
}

export default FooterBottom;