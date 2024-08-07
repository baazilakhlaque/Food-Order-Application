import classes from "./AvailableMeals.module.css"
import MealItem from "./MealItem/MealItem"
import Card from "../UI/Card"
import { useEffect, useState, Fragment } from 'react'

function AvailableMeals(){
  const [meals, setMeals] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchMeals(){
      setLoading(true)

      try{
        const response = await fetch('https://react-foodorderapp-60109-default-rtdb.firebaseio.com/meals.json')

        if (!response.ok){
          throw new Error("Something went wrong!")
        }
        const data = await response.json()
        
        const loadedItems = []
        for (const key in data){
          loadedItems.push({
            id: key,
            name: data[key].name,
            description: data[key].description,
            price: data[key].price
          })
        }
        setMeals(loadedItems)
      } catch (error){
        setError(error.message)
      }

      /*const response = await fetch('https://react-foodorderapp-60109-default-rtdb.firebaseio.com/meals.json')
      const data = await response.json()

      const loadedItems = []
      for (const key in data){
        loadedItems.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price
        })
      }*/
      setLoading(false)
    }

    fetchMeals()
  }, [])

  

  return(
    <Fragment>
    <section> 
    {loading && <p className={classes.mealsLoading}>Loading...</p>}
    {error && <p className={classes.mealsError}>{error}</p>}
    </section>

    <section className={classes.meals}>
      <Card>
      
      {meals.map(meal => <MealItem 
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price} />)}
      </Card>
    </section>
    </Fragment>
  ) 
}


export default AvailableMeals