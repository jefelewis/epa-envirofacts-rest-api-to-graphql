// GraphQL: TypeDefs
const TYPEDEFS = `
  type Query {

    getToxicReleaseInventoryHealthDescriptions: Chemical
    getToxicReleaseInventoryByCASNumber(chemical: String): Chemical
    getToxicReleaseInventoryByChemical(casNumber: String): Chemical

    getEnvironmentalRegulationComplianceRecordsByCity(stateAbbreviation: String, city: String): EnvironmentalRegulationComplianceRecord
   }

   type Chemical {
    CHEMICAL: String
    CAS_NUMBER: String
    HEALTH_EFFECTS_TEXT: String
    CANCER: String
    BODY_WEIGHT: String
    CARDIOVASCULAR: String
    DERMAL: String
    DEVELOPMENTAL: String
    ENDOCRINE: String
    GASTROINTESTINAL: String
    HEMATOLOGICAL: String
    HEPATIC: String
    IMMUNOLOGICAL: String
    METABOLIC: String
    MUSCULOSKELETAL: String
    NEUROLOGICAL: String
    OCULAR: String
    OTHER_SYSTEMIC: String
    RENAL: String
    REPRODUCTIVE: String
    RESPIRATORY: String
    HEALTH_EFFECTS_SOURCE_TEXT: String
   }

   type EnvironmentalRegulationComplianceRecord {
    REGISTRY_ID: Int
    NAME: String
    ADDRESS: String
    CITY: String
    STATE: String
    ZIP: Int
    REGION: String
    COUNTY: String
    FIPS: String
    LATITUDE: String
    LONGITUDE: String
    PERCENT_MINORITY_3MI_RAD: String
    POP_DENSITY_3MI_RAD: String
    FRS_TRIBAL_FLAG: String
    FED_FAC_FLAG: String
    CHESAPEAKE_BAY_FLAG: String
    TRI_TOTAL_RELEASES: String
    TRI_FACILITY_ID: String
    ICIS_CASES_5_YRS: String
    CURR_COMP_STATUS: String
    DAY_SINCE_LAST_INSP: Int
    MAJOR: String
    COMP_STATUS_3YR_BY_QTR: String
    UNIVERSE: String
    AFS_ID_FLAG: String
    NPDES_ID_FLAG: String
    RCRA_ID_FLAG: String
    SDWA_ID_FLAG: String
    TRIFID_ID_FLAG: String
    GHG_ID_FLAG: String
    COMPLIANCE_REPORT: String
    PROGRAM: String
    AFS_ID: String
    PERMIT_TYPE_AFS: "String
    NAICS_AFS: Int
    SIC_AFS: Int
    DAYS_SINCE_LAST_INSP_AFS: Int
    FORMAL_ENF_ACTION_5YRS_AFS: String
    COMP_STATUS_3YR_BY_QTR_AFS: String
    DETAILED_COMPLIANCE_STATUS: String
    AFS_NAME: String
    AFS_ADDRESS: String
    AFS_CITY: String
    AFS_STATE: String
    AFS_ZIP: String
    AFS_REGION: String
    INSPECTIONS_5YRS_AFS: String
    QTRS_IN_COMP_3YRS_AFS: String
    NA1: String
    CURRENT_SIGN_VIOLATIONS_AFS: String
    CURRENT_COMP_STATUS_AFS: String
    INF_ENF_ACT_BY_NOV_5YR_AFS: String
    DATE_OF_LAST_FORMAL_ACT_AFS: String
    PENALTIES_5_YRS_AFS: String
    DATE_OF_LAST_PENALTY_AFS: String
    AMOUNT_OF_LAST_PENALTY_AFS: String
    LATITUDE_2: String
    LONGITUDE_2: String
    NA_3: String
    NA_4: String
    MULTI_PERMIT_FLAG: String
    AFS_UNIVERSE: String
    TRI_RELEASES_AIR: String
    PROGRAM_CWA: String
    CWA_ID: String
    PERMIT_TYPE: String
    NAICS_2: String
    SIC_2: String
    DAYS_SINCE_LAST_INSP_CWA: String
    FORMAL_ENF_ACT_5YR_CWA: String
    COMP_STATUS_3YR_BY_QTR_CWA: String
    QNCR_CODE_3YR: String
    CWA_NAME: String
    CWA_ADDRESS: String
    CWA_CITY: String
    CWA_STATE: String
    CWA_ZIP: String
    CWA_REGION: String
    INSP_5YR_CWA: String
    QTR_NON_COMP_3_YRS_CWA: String
    NO_EFF_EXCEED_3_YRS_CWA: String
    CURR_SIG_NON_COMP_CWA: String
    CURR_COMP_STATUS_CWA: String
    INF_ENF_ACT_NOVS_5YRS_CWA: String
    DATE_LAST_FORMAL_ACT_CWA: String
    PENALTIES_5_YRS_CWA: String
    DATE_OF_LAST_PENALTY_CWA: String
    AMOUNT_OF_LAST_PENALTY_CWA: String
    LATITUDE_3: String
    LONGITUDE_3: String
    HUC_CODE: String
    COMP_TRACKING_CWA: String
    MULTI_PERMIT_FLAG_CWA: String
    CWA_UNIVERSE: String
    TRI_RELEASES_WATER: String
    PROGRAM_RCR: String
    RCR_ID: String
    PERMIT_TYPE_RCR: String
    NAICS: String
    SIC: String
    DAYS_SINCE_LAST_INSP_RCR: String
    FORMAL_ENF_ACT_5YRS_RCR: String
    COMP_STATUS_3YR_BY_QTR_RCR: String
    DETAILED_COMP_STATUS: String
    RCRA_NAME: String
    RCRA_ADDRESS: String
    RCRA_CITY: String
    RCRA_STATE: String
    RCRA_ZIP: String
    RCRA_REGION: String
    INSP_5YRS_RCRA: String
    QTRS_IN_NON_COMP_3YRS_RCR: String
    NA_5: String
    CURR_SIG_NON_COMP_RCR: String
    CURR_COMP_STATUS_RCR: String
    INF_ENF_ACT_NOVS_5YR_RCR: String
    DATE_LAST_FORM_ACT_RCR: String
    PENALTIES_5YR_RCR: String
    DATE_LAST_PENALTY_RCR: String
    AMOUNT_LAST_PENALTY_RCR: String
    LATITUDE_4: String
    LONGITUDE_4: String
    NA_7: String
    NA_8: String
    MULTI_PERMIT_FLAG_RCR: String
    RCR_UNIVERSE: String
    TRI_RELEASES_LAND: String
   }
`;


// Exports
export default TYPEDEFS;