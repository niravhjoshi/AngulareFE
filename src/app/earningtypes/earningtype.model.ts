export class Earningtype
{
  public EarningTypeName: string;
  public CreateDate: any;
  public CreatedUID: string;

constructor(EarType: string,CrDate: any,CrUID: string){
  this.EarningTypeName = EarType;
  this.CreateDate = CrDate;
  this.CreatedUID =CrUID;
}
}
