import styles from "./List.module.css";
import { useCallback, useState } from "react";
export const List = ({ data }) => {
  const [indexOfActiveItem, setIndexOfActiveItem] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  // const logItem = useCallback(() => {
  //   console.log(selectedItem);
  // }, [indexOfActiveItem]);

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        Active Item : {`${selectedItem ? selectedItem : "-"}`}
      </div>
      <div className={styles.list}>
        {data.map((i, index) => (
          <ListItem
            key={`item-${index}`}
            name={i.name}
            index={index}
            setIndexOfActiveItem={setIndexOfActiveItem}
            indexOfActiveItem={indexOfActiveItem}
            setSelectedItem={setSelectedItem}
          />
        ))}
      </div>
    </div>
  );
};

const ListItem = ({
  name,
  setIndexOfActiveItem,
  setSelectedItem,
  indexOfActiveItem,
  index,
}) => {
  const handleOnClick = useCallback(() => {
    setIndexOfActiveItem(index);
    setSelectedItem(name);
    console.log("render in child", name);
  }, [indexOfActiveItem]);

  return (
    <div className={styles.item} onClick={handleOnClick}>
      {name}

      {indexOfActiveItem === index && <ActiveBadge />}
    </div>
  );
};

const ActiveBadge = () => {
  return <div className={styles.active} />;
};
