import React from "react";

class Popular extends React.Component {
  constructor(props) {
    super(props);

    this.state = { selectedLanguage: "All" };

    this.updateLanguage = this.updateLanguage.bind(this);
  }

  updateLanguage(lang) {
    this.setState({ selectedLanguage: lang });
  }
  render() {
    var languages = ["All", "JavaScript", "Ruby", "Java", "CSS", "Python"];
    return (
      <ul className="languages">
        {languages.map(lang => {
          return (
            <li
              onClick={() => {
                this.updateLanguage(lang);
              }}
              key={lang}
              style={
                lang === this.state.selectedLanguage
                  ? { color: `#d0021b` }
                  : null
              }
            >
              {lang}
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Popular;
