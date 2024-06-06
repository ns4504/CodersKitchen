class Navbar {
    constructor(containerId, links, headingText = '') {
      this.container = document.getElementById(containerId);
      this.links = links;
      this.headingText = headingText;
    }
 
    render() {
      const navbarDiv = document.createElement('div');
      navbarDiv.className = 'navbar';
 
      this.links.forEach(link => {
        const a = document.createElement('a');
        a.href = link.href;
        a.textContent = link.text;
        navbarDiv.appendChild(a);
      });
 
      if (this.headingText) {
        const heading = document.createElement('h1');
        heading.style.color = 'black';
        heading.textContent = this.headingText;
        navbarDiv.appendChild(heading);
      }
 
      this.container.appendChild(navbarDiv);
    }
  }
 
  document.addEventListener('DOMContentLoaded', () => {
    const navbar = new Navbar('navbar-container', [
      { href: 'home.php', text: 'Home' },
      { href: 'profile.php', text: 'Profile' },
      { href: 'recipes.php', text: 'Recipes' },
      { href: 'share.php', text: 'Share' }
    ], 'Welcome');
 
    navbar.render();
  });
 