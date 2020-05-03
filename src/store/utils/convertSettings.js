export default (settings) => settings.reduce((acc, el) => ({ ...acc, [el.name]: el }), {});
