import TypeAhead from 'hospitalrun/components/type-ahead';
import icd10Generator from 'hospitalrun/utils/icd10';
export default TypeAhead.extend({
  class: 'scrollable-typeahead',
  minlength: 2,
  // selectionKey: 'id',
  setOnBlur: true,
  templates: {
    header: '<div class="alert alert-success well-sm query-results" role="alert"></div>'
  },

  _getSource() {
    let ICD10Bloodhound = new Bloodhound({
      datumTokenizer: Bloodhound.tokenizers.obj.whitespace(this.get('displayKey')),
      queryTokenizer: Bloodhound.tokenizers.whitespace,
      local: icd10Generator(),
      limit: 100
    });
    ICD10Bloodhound.initialize();
    this.set('bloodhound-icd10', ICD10Bloodhound);
    return ICD10Bloodhound.ttAdapter();
  }
});