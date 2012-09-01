package com.usp.expmgmt.server.meta;

//@javax.annotation.Generated(value = { "slim3-gen", "@VERSION@" }, date = "2012-08-31 08:58:32")
/** */
public final class ExpenseReportMeta extends org.slim3.datastore.ModelMeta<com.usp.expmgmt.shared.model.ExpenseReport> {

    /** */
    public final org.slim3.datastore.CollectionAttributeMeta<com.usp.expmgmt.shared.model.ExpenseReport, java.util.List<java.lang.Double>, java.lang.Double> amountList = new org.slim3.datastore.CollectionAttributeMeta<com.usp.expmgmt.shared.model.ExpenseReport, java.util.List<java.lang.Double>, java.lang.Double>(this, "amountList", "amountList", java.util.List.class);

    /** */
    public final org.slim3.datastore.StringAttributeMeta<com.usp.expmgmt.shared.model.ExpenseReport> date = new org.slim3.datastore.StringAttributeMeta<com.usp.expmgmt.shared.model.ExpenseReport>(this, "date", "date");

    /** */
    public final org.slim3.datastore.StringAttributeMeta<com.usp.expmgmt.shared.model.ExpenseReport> description = new org.slim3.datastore.StringAttributeMeta<com.usp.expmgmt.shared.model.ExpenseReport>(this, "description", "description");

    /** */
    public final org.slim3.datastore.StringCollectionAttributeMeta<com.usp.expmgmt.shared.model.ExpenseReport, java.util.List<java.lang.String>> emailList = new org.slim3.datastore.StringCollectionAttributeMeta<com.usp.expmgmt.shared.model.ExpenseReport, java.util.List<java.lang.String>>(this, "emailList", "emailList", java.util.List.class);

    /** */
    public final org.slim3.datastore.CoreAttributeMeta<com.usp.expmgmt.shared.model.ExpenseReport, com.google.appengine.api.datastore.Key> key = new org.slim3.datastore.CoreAttributeMeta<com.usp.expmgmt.shared.model.ExpenseReport, com.google.appengine.api.datastore.Key>(this, "__key__", "key", com.google.appengine.api.datastore.Key.class);

    /** */
    public final org.slim3.datastore.StringAttributeMeta<com.usp.expmgmt.shared.model.ExpenseReport> ownerEmail = new org.slim3.datastore.StringAttributeMeta<com.usp.expmgmt.shared.model.ExpenseReport>(this, "ownerEmail", "ownerEmail");

    /** */
    public final org.slim3.datastore.CoreAttributeMeta<com.usp.expmgmt.shared.model.ExpenseReport, java.lang.Long> version = new org.slim3.datastore.CoreAttributeMeta<com.usp.expmgmt.shared.model.ExpenseReport, java.lang.Long>(this, "version", "version", java.lang.Long.class);

    private static final ExpenseReportMeta slim3_singleton = new ExpenseReportMeta();

    /**
     * @return the singleton
     */
    public static ExpenseReportMeta get() {
       return slim3_singleton;
    }

    /** */
    public ExpenseReportMeta() {
        super("ExpenseReport", com.usp.expmgmt.shared.model.ExpenseReport.class);
    }

    @Override
    public com.usp.expmgmt.shared.model.ExpenseReport entityToModel(com.google.appengine.api.datastore.Entity entity) {
        com.usp.expmgmt.shared.model.ExpenseReport model = new com.usp.expmgmt.shared.model.ExpenseReport();
        model.setAmountList(toList(java.lang.Double.class, entity.getProperty("amountList")));
        model.setDate((java.lang.String) entity.getProperty("date"));
        model.setDescription((java.lang.String) entity.getProperty("description"));
        model.setEmailList(toList(java.lang.String.class, entity.getProperty("emailList")));
        model.setKey(entity.getKey());
        model.setOwnerEmail((java.lang.String) entity.getProperty("ownerEmail"));
        model.setVersion((java.lang.Long) entity.getProperty("version"));
        return model;
    }

    @Override
    public com.google.appengine.api.datastore.Entity modelToEntity(java.lang.Object model) {
        com.usp.expmgmt.shared.model.ExpenseReport m = (com.usp.expmgmt.shared.model.ExpenseReport) model;
        com.google.appengine.api.datastore.Entity entity = null;
        if (m.getKey() != null) {
            entity = new com.google.appengine.api.datastore.Entity(m.getKey());
        } else {
            entity = new com.google.appengine.api.datastore.Entity(kind);
        }
        entity.setProperty("amountList", m.getAmountList());
        entity.setProperty("date", m.getDate());
        entity.setProperty("description", m.getDescription());
        entity.setProperty("emailList", m.getEmailList());
        entity.setProperty("ownerEmail", m.getOwnerEmail());
        entity.setProperty("version", m.getVersion());
        entity.setProperty("slim3.schemaVersion", 1);
        return entity;
    }

    @Override
    protected com.google.appengine.api.datastore.Key getKey(Object model) {
        com.usp.expmgmt.shared.model.ExpenseReport m = (com.usp.expmgmt.shared.model.ExpenseReport) model;
        return m.getKey();
    }

    @Override
    protected void setKey(Object model, com.google.appengine.api.datastore.Key key) {
        validateKey(key);
        com.usp.expmgmt.shared.model.ExpenseReport m = (com.usp.expmgmt.shared.model.ExpenseReport) model;
        m.setKey(key);
    }

    @Override
    protected long getVersion(Object model) {
        com.usp.expmgmt.shared.model.ExpenseReport m = (com.usp.expmgmt.shared.model.ExpenseReport) model;
        return m.getVersion() != null ? m.getVersion().longValue() : 0L;
    }

    @Override
    protected void assignKeyToModelRefIfNecessary(com.google.appengine.api.datastore.AsyncDatastoreService ds, java.lang.Object model) {
    }

    @Override
    protected void incrementVersion(Object model) {
        com.usp.expmgmt.shared.model.ExpenseReport m = (com.usp.expmgmt.shared.model.ExpenseReport) model;
        long version = m.getVersion() != null ? m.getVersion().longValue() : 0L;
        m.setVersion(Long.valueOf(version + 1L));
    }

    @Override
    protected void prePut(Object model) {
    }

    @Override
    protected void postGet(Object model) {
    }

    @Override
    public String getSchemaVersionName() {
        return "slim3.schemaVersion";
    }

    @Override
    public String getClassHierarchyListName() {
        return "slim3.classHierarchyList";
    }

    @Override
    protected boolean isCipherProperty(String propertyName) {
        return false;
    }

    @Override
    protected void modelToJson(org.slim3.datastore.json.JsonWriter writer, java.lang.Object model, int maxDepth, int currentDepth) {
        com.usp.expmgmt.shared.model.ExpenseReport m = (com.usp.expmgmt.shared.model.ExpenseReport) model;
        writer.beginObject();
        org.slim3.datastore.json.Default encoder0 = new org.slim3.datastore.json.Default();
        if(m.getAmountArray() != null){
            writer.setNextPropertyName("amountArray");
            // java.lang.String[](java.lang.String[]) is not supported.
        }
        if(m.getAmountList() != null){
            writer.setNextPropertyName("amountList");
            writer.beginArray();
            for(java.lang.Double v : m.getAmountList()){
                encoder0.encode(writer, v);
            }
            writer.endArray();
        }
        if(m.getDate() != null){
            writer.setNextPropertyName("date");
            encoder0.encode(writer, m.getDate());
        }
        if(m.getDescription() != null){
            writer.setNextPropertyName("description");
            encoder0.encode(writer, m.getDescription());
        }
        if(m.getEmailArray() != null){
            writer.setNextPropertyName("emailArray");
            // java.lang.String[](java.lang.String[]) is not supported.
        }
        if(m.getEmailList() != null){
            writer.setNextPropertyName("emailList");
            writer.beginArray();
            for(java.lang.String v : m.getEmailList()){
                encoder0.encode(writer, v);
            }
            writer.endArray();
        }
        if(m.getKey() != null){
            writer.setNextPropertyName("key");
            encoder0.encode(writer, m.getKey());
        }
        if(m.getOwnerEmail() != null){
            writer.setNextPropertyName("ownerEmail");
            encoder0.encode(writer, m.getOwnerEmail());
        }
        if(m.getVersion() != null){
            writer.setNextPropertyName("version");
            encoder0.encode(writer, m.getVersion());
        }
        writer.endObject();
    }

    @Override
    protected com.usp.expmgmt.shared.model.ExpenseReport jsonToModel(org.slim3.datastore.json.JsonRootReader rootReader, int maxDepth, int currentDepth) {
        com.usp.expmgmt.shared.model.ExpenseReport m = new com.usp.expmgmt.shared.model.ExpenseReport();
        org.slim3.datastore.json.JsonReader reader = null;
        org.slim3.datastore.json.Default decoder0 = new org.slim3.datastore.json.Default();
        reader = rootReader.newObjectReader("amountArray");
        // java.lang.String[](java.lang.String[]) is not supported.
        reader = rootReader.newObjectReader("amountList");
        {
            java.util.ArrayList<java.lang.Double> elements = new java.util.ArrayList<java.lang.Double>();
            org.slim3.datastore.json.JsonArrayReader r = rootReader.newArrayReader("amountList");
            if(r != null){
                reader = r;
                int n = r.length();
                for(int i = 0; i < n; i++){
                    r.setIndex(i);
                    java.lang.Double v = decoder0.decode(reader, (java.lang.Double)null)                    ;
                    if(v != null){
                        elements.add(v);
                    }
                }
                m.setAmountList(elements);
            }
        }
        reader = rootReader.newObjectReader("date");
        m.setDate(decoder0.decode(reader, m.getDate()));
        reader = rootReader.newObjectReader("description");
        m.setDescription(decoder0.decode(reader, m.getDescription()));
        reader = rootReader.newObjectReader("emailArray");
        // java.lang.String[](java.lang.String[]) is not supported.
        reader = rootReader.newObjectReader("emailList");
        {
            java.util.ArrayList<java.lang.String> elements = new java.util.ArrayList<java.lang.String>();
            org.slim3.datastore.json.JsonArrayReader r = rootReader.newArrayReader("emailList");
            if(r != null){
                reader = r;
                int n = r.length();
                for(int i = 0; i < n; i++){
                    r.setIndex(i);
                    java.lang.String v = decoder0.decode(reader, (java.lang.String)null)                    ;
                    if(v != null){
                        elements.add(v);
                    }
                }
                m.setEmailList(elements);
            }
        }
        reader = rootReader.newObjectReader("key");
        m.setKey(decoder0.decode(reader, m.getKey()));
        reader = rootReader.newObjectReader("ownerEmail");
        m.setOwnerEmail(decoder0.decode(reader, m.getOwnerEmail()));
        reader = rootReader.newObjectReader("version");
        m.setVersion(decoder0.decode(reader, m.getVersion()));
        return m;
    }
}