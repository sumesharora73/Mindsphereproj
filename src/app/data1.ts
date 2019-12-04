export interface data1{
    
  Production_Auto: ProductionAuto;
  Job_Load_Unload_Time: ProductionAuto;
  MDA_Mode: ProductionAuto;
  Setting_Time: ProductionAuto;
  Break_Time: ProductionAuto;
  Breakdown_Time: ProductionAuto;
  Emergency: ProductionAuto;
  Idle_Time: ProductionAuto;
  starttime: string;
  endtime: string;
}

interface ProductionAuto {
  firsttime: string;
  average: number;
  countuncertain: number;
  maxvalue: number;
  firstvalue: number;
  countbad: number;
  mintime: string;
  lastvalue: number;
  sum: number;
  minvalue: number;
  maxtime: string;
  sd: number;
  lasttime: string;
  countgood: number;
}