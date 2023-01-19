import React, { useState } from "react";
import ReactSelect from "react-select";
import Layout from "../../common/Layout";
import Field from "../../ui/Field/Field";
import Button from "../../ui/Button/Button";
import {optionColor} from "./optionColor";

import styles from './NewWorkout.module.scss'
import bgImg from "../../../images/new-workout-bg.jpg";

const NewWorkout = () => {
  const [name, setName] = useState();

  const handleSubmit = () => {
    console.log("ssf");
  };

  return (
    <>
      <Layout bgImg={bgImg} heading='Create new Workout' />
      <div className={styles.wrapper}>
        <form onSubmit={handleSubmit}>
          <Field
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <ReactSelect
            classNamePrefix='select2-selection'
            placeholder='Статус...'
            title='Статус'
            options={[
              {value: 0, label: 'Опубликовано'},
              {value: 1, label: 'Черновик'}
            ]}
            isSearchable={true}
            value={statusVision}
            onChange={setStatusVision}
            theme={theme => optionColor(theme)}
          />
          <Button text="Create" callback={() => {}} />
        </form>
      </div>
    </>
  );
};

export default NewWorkout;
