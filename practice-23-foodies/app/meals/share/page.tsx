"use client";
import { useFormState } from "react-dom";
import ImagePicker from "@/components/ImagePicker";
import classes from "./page.module.css";
import { shareMeal } from "@/lib/action";
import MealFormSubmit from "@/components/MealFormSubmit";

export default function ShareMealPage() {
  const [state, formAction] = useFormState(shareMeal, { message: null });

  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={formAction}>
          <div className={classes.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input
                type="text"
                id="name"
                name="name"
                defaultValue={state.name}
              />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input
                type="email"
                id="email"
                name="email"
                defaultValue={state.email}
              />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              defaultValue={state.title}
            />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input
              type="text"
              id="summary"
              name="summary"
              defaultValue={state.summary}
            />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows={10}
            ></textarea>
          </p>
          <ImagePicker label="image" name="image" />
          <p className={classes.actions}>
            <MealFormSubmit />
          </p>
          {state.message && <p>{state.message}</p>}
        </form>
      </main>
    </>
  );
}
