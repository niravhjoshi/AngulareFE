export class EarningModel{
  public CreateUID: string;
  public EarnType: string;
  public PerName: string;
  public EarnAmt: number;
  public EarnComm: string;
  public CreateDate: any;
  public DocPath: string;

  constructor(uid: string,EarnType: string,PerName: string,EarnAmt: number,EarComm: string,CreateDate: any,Doc: string ) {
  this.CreateUID = uid;
  this.EarnType = EarnType;
  this.PerName = PerName;
  this.EarnAmt = EarnAmt;
  this.EarnComm = EarComm;
  this.CreateDate = CreateDate;
  this.DocPath = Doc;

  }

}
