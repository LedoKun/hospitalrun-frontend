import Mixin from '@ember/object/mixin';
import SelectValues from 'hospitalrun/utils/select-values';
export default Mixin.create({
  HealthcareSchemes: [
    'ประกันสุขภาพทั่วหน้า',
    'ประกันสุขภาพทั่วหน้า นอกเขต',
    'ประกันสังคม',
    'ประกันสังคม ต่างรพ.',
    'ข้าราชการ/จ่ายตรง',
    'ต่างด้าว',
    'ชำระเงิน'
  ].map(SelectValues.selectValuesMap)
});
