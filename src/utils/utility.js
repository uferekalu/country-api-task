export const formatNumber = (number) => {
    return number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
};

export const formatLink = (link, request) => {

    if(link.includes('timor') || link.includes('bissau')) return link;
    return !request ? link.replaceAll(" ", "-") : link.replaceAll("-", " ");
};


