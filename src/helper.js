export const getOptionsObject = (options) => {
    let updatedOptions = [];
    options.forEach((option) => {
      updatedOptions.push({ label: option, value: option });
    });
  
    return updatedOptions;
  };