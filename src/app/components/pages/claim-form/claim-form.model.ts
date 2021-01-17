export class ClaimFormModel {
  contractId: Number;
  customerId: String;
  numberPlate: string;
  name: string;
  repaintFee: boolean;
  repaintFeeAmount: Number;
  bringingFee: boolean;
  bringingFeeAmount: Number;
  rearViewMirror:boolean;
  rearViewMirrorAmount: Number;
  componentFee: boolean;
  componentFeeAmount: Number;
  scratchedFee: boolean;
  scratchedFeeAmount: Number;

  // Garage Information
  partnerId: String;
  employeeName: String;
  employeePhoneNumber: String;
  note: String;


}