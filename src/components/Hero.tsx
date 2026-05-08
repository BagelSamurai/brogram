export default function Hero() {
  return (
    <>
      <section className="nes-container with-title">
        <p className="title">Why?</p>
        <ul className="nes-list is-disc">
          <li>Follow a simple program with guaranteed results</li>
          <li>Get fit, healthy, strong and shredded</li>
          <li>Learn more about gym, training and technique</li>
          <li>Become a lifetime gym bro 💛</li>
        </ul>
      </section>

      <section className="nes-container with-title">
        <p className="title">The Rules</p>
        <p>
          To complete this program, you <b>MUST</b> follow these 3 simple rules:
        </p>
        <ul className="nes-list is-disc">
          <li>
            <b>Rest</b> — Ensure that you are taking rest days where necessary
          </li>
          <li>
            <b>Reps</b> — Every rep is a pause rep following a{" "}
            <abbr title="2 seconds down - 2 seconds pause - 2 seconds up">
              2-2-2 tempo
            </abbr>
          </li>
          <li>
            <b>Weight*</b> — Select the maximum weight that allows you to
            complete the set with good form
          </li>
        </ul>
        <small>
          * The first and second set should be at 75% and 85% of your working
          weight used for the last two sets.
        </small>
      </section>

      <section className="nes-container with-title">
        <p className="title">The Plan</p>
        <p>
          This training plan uses a structure known as the <b>Bro Split</b>,
          following this rotation:
        </p>
        <p>
          <b>
            <i>Push &rarr; Pull &rarr; Legs &rarr; Repeat</i>
          </b>
        </p>
        <p>Complete all workouts below and track your progress ✅</p>
      </section>
    </>
  );
}
