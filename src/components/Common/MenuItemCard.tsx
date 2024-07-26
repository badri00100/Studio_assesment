const MenuItemCard = ({ data }: any) => {
  return (
    <div className="menu-item">
      <h3>{data.heading}</h3>
      <p>{data.desc}</p>
      <div className="price">{data.price}</div>
    </div>
  );
};

export default MenuItemCard;
