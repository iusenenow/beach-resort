import React, { useContext } from "react";
import { RoomContext } from "../context";
import Title from "../components/Title";

const getUnique = (items, value) => [
  ...new Set(items.map(item => item[value]))
];

const RoomsFilter = ({ rooms }) => {
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets
  } = useContext(RoomContext);

  // get unique types
  let types = getUnique(rooms, "type");
  // add all
  types = ["all", ...types].map((item, index) => (
    <option value={item} key={index}>
      {item}
    </option>
  ));

  const people = getUnique(rooms, "capacity").map((item, index) => (
    <option value={item} key={index}>
      {item}
    </option>
  ));

  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form className="filter-form">
        {/* // select type */}
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={handleChange}
          >
            {types}
          </select>
        </div>
        {/* end select type */}

        {/* // guests */}
        <div className="form-group">
          <label htmlFor="capacity">Guests</label>
          <select
            name="capacity"
            id="capacity"
            value={capacity}
            className="form-control"
            onChange={handleChange}
          >
            {people}
          </select>
        </div>
        {/* end guests */}

        {/* room prices */}
        <div className="form-group">
          <label htmlFor="price">room price ${price}</label>
          <input
            type="range"
            name="price"
            id="price"
            value={price}
            min={minPrice}
            max={maxPrice}
            className="form-control"
            onChange={handleChange}
          />
        </div>
        {/* endroom prices */}

        {/* size */}
        <div className="form-group">
          <label htmlFor="size">room size</label>
          <div className="size-inputs">
            <input
              type="number"
              name="minSize"
              id="size"
              value={minSize}
              className="size-input"
              onChange={handleChange}
            />
            <input
              type="number"
              name="maxSize"
              id="size"
              value={maxSize}
              className="size-input"
              onChange={handleChange}
            />
          </div>
        </div>
        {/* end of size */}

        {/* extras */}
        <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              name="breakfast"
              id="breakfast"
              checked={breakfast}
              onChange={handleChange}
            />
            <label htmlFor="breakfast">breakfast</label>
          </div>
        </div>
        <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              name="pets"
              id="pets"
              checked={pets}
              onChange={handleChange}
            />
            <label htmlFor="pets">pets</label>
          </div>
        </div>
        {/* end of extras */}
      </form>
    </section>
  );
};

export default RoomsFilter;