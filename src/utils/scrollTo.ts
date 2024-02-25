export enum Section {
    HERO = 'hero',
    CONTACT = 'contact'
}

const scrollTo = (section: Section) => {
    const headerHeight = document.getElementsByTagName('header')[0]?.offsetHeight || 0;
    const dims = document.getElementById(section)?.getBoundingClientRect();

    window.scrollTo(window.scrollX, (dims?.top || 0) - headerHeight);
}

export default scrollTo;