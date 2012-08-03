package com.usp.expmgmt.server.meta;

//@javax.annotation.Generated(value = { "slim3-gen", "@VERSION@" }, date = "2012-04-16 22:15:33")
/** */
public final class FeedbackDataMeta extends org.slim3.datastore.ModelMeta<com.usp.expmgmt.shared.model.FeedbackData> {

    /** */
    public final org.slim3.datastore.StringAttributeMeta<com.usp.expmgmt.shared.model.FeedbackData> date = new org.slim3.datastore.StringAttributeMeta<com.usp.expmgmt.shared.model.FeedbackData>(this, "date", "date");

    /** */
    public final org.slim3.datastore.StringAttributeMeta<com.usp.expmgmt.shared.model.FeedbackData> feedback = new org.slim3.datastore.StringAttributeMeta<com.usp.expmgmt.shared.model.FeedbackData>(this, "feedback", "feedback");

    /** */
    public final org.slim3.datastore.CoreAttributeMeta<com.usp.expmgmt.shared.model.FeedbackData, com.google.appengine.api.datastore.Key> key = new org.slim3.datastore.CoreAttributeMeta<com.usp.expmgmt.shared.model.FeedbackData, com.google.appengine.api.datastore.Key>(this, "__key__", "key", com.google.appengine.api.datastore.Key.class);

    /** */
    public final org.slim3.datastore.StringAttributeMeta<com.usp.expmgmt.shared.model.FeedbackData> ownerEmail = new org.slim3.datastore.StringAttributeMeta<com.usp.expmgmt.shared.model.FeedbackData>(this, "ownerEmail", "ownerEmail");

    /** */
    public final org.slim3.datastore.CoreAttributeMeta<com.usp.expmgmt.shared.model.FeedbackData, java.lang.Long> version = new org.slim3.datastore.CoreAttributeMeta<com.usp.expmgmt.shared.model.FeedbackData, java.lang.Long>(this, "version", "version", java.lang.Long.class);

    private static final FeedbackDataMeta slim3_singleton = new FeedbackDataMeta();

    /**
     * @return the singleton
     */
    public static FeedbackDataMeta get() {
       return slim3_singleton;
    }

    /** */
    public FeedbackDataMeta() {
        super("FeedbackData", com.usp.expmgmt.shared.model.FeedbackData.class);
    }

    @Override
    public com.usp.expmgmt.shared.model.FeedbackData entityToModel(com.google.appengine.api.datastore.Entity entity) {
        com.usp.expmgmt.shared.model.FeedbackData model = new com.usp.expmgmt.shared.model.FeedbackData();
        model.setDate((java.lang.String) entity.getProperty("date"));
        model.setFeedback((java.lang.String) entity.getProperty("feedback"));
        model.setKey(entity.getKey());
        model.setOwnerEmail((java.lang.String) entity.getProperty("ownerEmail"));
        model.setVersion((java.lang.Long) entity.getProperty("version"));
        return model;
    }

    @Override
    public com.google.appengine.api.datastore.Entity modelToEntity(java.lang.Object model) {
        com.usp.expmgmt.shared.model.FeedbackData m = (com.usp.expmgmt.shared.model.FeedbackData) model;
        com.google.appengine.api.datastore.Entity entity = null;
        if (m.getKey() != null) {
            entity = new com.google.appengine.api.datastore.Entity(m.getKey());
        } else {
            entity = new com.google.appengine.api.datastore.Entity(kind);
        }
        entity.setProperty("date", m.getDate());
        entity.setProperty("feedback", m.getFeedback());
        entity.setProperty("ownerEmail", m.getOwnerEmail());
        entity.setProperty("version", m.getVersion());
        entity.setProperty("slim3.schemaVersion", 1);
        return entity;
    }

    @Override
    protected com.google.appengine.api.datastore.Key getKey(Object model) {
        com.usp.expmgmt.shared.model.FeedbackData m = (com.usp.expmgmt.shared.model.FeedbackData) model;
        return m.getKey();
    }

    @Override
    protected void setKey(Object model, com.google.appengine.api.datastore.Key key) {
        validateKey(key);
        com.usp.expmgmt.shared.model.FeedbackData m = (com.usp.expmgmt.shared.model.FeedbackData) model;
        m.setKey(key);
    }

    @Override
    protected long getVersion(Object model) {
        com.usp.expmgmt.shared.model.FeedbackData m = (com.usp.expmgmt.shared.model.FeedbackData) model;
        return m.getVersion() != null ? m.getVersion().longValue() : 0L;
    }

    @Override
    protected void assignKeyToModelRefIfNecessary(com.google.appengine.api.datastore.AsyncDatastoreService ds, java.lang.Object model) {
    }

    @Override
    protected void incrementVersion(Object model) {
        com.usp.expmgmt.shared.model.FeedbackData m = (com.usp.expmgmt.shared.model.FeedbackData) model;
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
        com.usp.expmgmt.shared.model.FeedbackData m = (com.usp.expmgmt.shared.model.FeedbackData) model;
        writer.beginObject();
        org.slim3.datastore.json.Default encoder0 = new org.slim3.datastore.json.Default();
        if(m.getDate() != null){
            writer.setNextPropertyName("date");
            encoder0.encode(writer, m.getDate());
        }
        if(m.getFeedback() != null){
            writer.setNextPropertyName("feedback");
            encoder0.encode(writer, m.getFeedback());
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
    protected com.usp.expmgmt.shared.model.FeedbackData jsonToModel(org.slim3.datastore.json.JsonRootReader rootReader, int maxDepth, int currentDepth) {
        com.usp.expmgmt.shared.model.FeedbackData m = new com.usp.expmgmt.shared.model.FeedbackData();
        org.slim3.datastore.json.JsonReader reader = null;
        org.slim3.datastore.json.Default decoder0 = new org.slim3.datastore.json.Default();
        reader = rootReader.newObjectReader("date");
        m.setDate(decoder0.decode(reader, m.getDate()));
        reader = rootReader.newObjectReader("feedback");
        m.setFeedback(decoder0.decode(reader, m.getFeedback()));
        reader = rootReader.newObjectReader("key");
        m.setKey(decoder0.decode(reader, m.getKey()));
        reader = rootReader.newObjectReader("ownerEmail");
        m.setOwnerEmail(decoder0.decode(reader, m.getOwnerEmail()));
        reader = rootReader.newObjectReader("version");
        m.setVersion(decoder0.decode(reader, m.getVersion()));
        return m;
    }
}