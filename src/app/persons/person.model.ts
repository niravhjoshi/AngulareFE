export class Person{
  public CreateUID: string;
  public FullName: string;
  public Sex: string;
  public ImageURL: string;
  public Email: string;
  public BirthDate: any;

  constructor(UserUID: string,FullName: string,Sex: string,ImageURL: string,Email: string,BirthDate: any) {
    this.CreateUID=UserUID;
    this.FullName=FullName;
    this.Sex = Sex;
    this.ImageURL = ImageURL;
    this.Email = Email;
    this.BirthDate = BirthDate;
  }
}
