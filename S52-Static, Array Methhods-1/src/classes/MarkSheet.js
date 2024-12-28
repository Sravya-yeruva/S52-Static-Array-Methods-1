class MarkSheet {
  static PassMarks = 35;
  static aboutMarks = () => {
    console.log("Tenth exams are important");
  };
  constructor() {
    console.log("About Static");
    this.TeluguMarks = 0;
    this.HindiMarks = 0;
    this.EnglishMarks = 0;
    this.MathsMarks = 0;
    this.ScienceMarks = 0;
    this.SocialMarks = 0;
  }

  calculateResult = () => {
    if (
      this.TeluguMarks >= MarkSheet.PassMarks &&
      this.HindiMarks >= MarkSheet.PassMarks &&
      this.EnglishMarks >= MarkSheet.PassMarks &&
      this.MathsMarks >= MarkSheet.PassMarks &&
      this.ScienceMarks >= MarkSheet.PassMarks &&
      this.SocialMarks >= MarkSheet.PassMarks
    ) {
      console.log("Student Passed");
    } else {
      console.log("Student Failed");
    }
  };
}

export default MarkSheet;
