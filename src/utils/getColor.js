const getColor = (status) => {
  let color = ['#A6ACAF', '#FF5733', '#FFC300', '#27AE60', '#2874A6'];

  return status <= color.length + 1 ? color[status- 1] : '#A6ACAF';
};
export default getColor;
