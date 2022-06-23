export default function Education() {
  return (
    <section className="education" id="education">
      <div className="container">
        <div className="section-title">Education</div>
        <Item
          title="University UDELAR - Uruguay"
          date="Computer engineer - Feb 2021"
        >
          <p>Computer Engineer</p>
        </Item>
        <Item
          title="Data science & Machine learning"
          date="IDATHA Academy - Feb 2021"
        >
          <p>
            Introduction to Data science and machine learning, we used Jupyter
            Notebooks with the main libraries pandas, geopandas, numpy. We
            learnt about clean and data quality, descriptive stadistics,
            exploratory Data Analysis (EDA) y Profiling, Calsification and
            regresion methods, deep learning, evaluation metrics.
          </p>
        </Item>
        <Item title="Smart contracts" date="University at Buffalo (Coursera) - May 2021">
          <p>
            Introduction to smart contracts and application in Solidity, the
            course with the main concepts of
          </p>
        </Item>
        <Item title="Decentralized Applications (Dapps)" date="University at Buffalo (Coursera) - Feb 2021">
          <p>
            Introduction to Decentralized Applications (Dapps)
          </p>
        </Item> 
        <Item title="Languages" date="">
          <p>Spanish (Native) </p>
          <p>English (Speak: Good, Write: Good, Listen: Good)</p>
        </Item>
      </div>
    </section>
  );
}

function Item({ title, date, children }: any) {
  return (
    <div className="education-item">
      <h2 className="education-title">{title}</h2>
      <span className="education-subtitle">{date}</span>
      <div className="education-content">{children}</div>
    </div>
  );
}
