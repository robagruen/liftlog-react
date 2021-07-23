import React from "react";

import List from "./../../components/List/List";

export default function Exercises() {

  const exercises = [
    {
      name: "Bench Press", 
      link: "#/bench-press",
      categories: [
        {
          cat_name: "Chest",
          cat_link: "#"
        },
        {
          cat_name: "Back",
          cat_link: "#"
        }
      ]
    },
    {
      name: "Sumo Squats", 
      link: "#/sumo-squats",
      categories: []
    },
    {
      name: "Skull Crushers", 
      link: "#/skull-crushers",
      categories: [
        {
          cat_name: "Arms",
          cat_link: "#"
        },
        {
          cat_name: "Shoulders",
          cat_link: "#"
        }
      ]
    },
  ];
  

  return (
   <div>
       <h2>Exercises</h2>
       <List listData={exercises} />
   </div>
  );
}
