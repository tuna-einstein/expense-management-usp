package com.usp.expmgmt.server.meta;

//@javax.annotation.Generated(value = { "slim3-gen", "@VERSION@" }, date = "2012-09-15 05:46:40")
/** */
public final class ChangeLogMessageMeta extends org.slim3.datastore.ModelMeta<com.usp.expmgmt.shared.model.ChangeLogMessage> {

    /** */
    public final org.slim3.datastore.StringAttributeMeta<com.usp.expmgmt.shared.model.ChangeLogMessage> actorName = new org.slim3.datastore.StringAttributeMeta<com.usp.expmgmt.shared.model.ChangeLogMessage>(this, "actorName", "actorName");

    /** */
    public final org.slim3.datastore.StringAttributeMeta<com.usp.expmgmt.shared.model.ChangeLogMessage> changeMessage = new org.slim3.datastore.StringAttributeMeta<com.usp.expmgmt.shared.model.ChangeLogMessage>(this, "changeMessage", "changeMessage");

    /** */
    public final org.slim3.datastore.StringAttributeMeta<com.usp.expmgmt.shared.model.ChangeLogMessage> date = new org.slim3.datastore.StringAttributeMeta<com.usp.expmgmt.shared.model.ChangeLogMessage>(this, "date", "date");

    /** */
    public final org.slim3.datastore.StringAttributeMeta<com.usp.expmgmt.shared.model.ChangeLogMessage> expenseReportKey = new org.slim3.datastore.StringAttributeMeta<com.usp.expmgmt.shared.model.ChangeLogMessage>(this, "expenseReportKey", "expenseReportKey");

    /** */
    public final org.slim3.datastore.CoreAttributeMeta<com.usp.expmgmt.shared.model.ChangeLogMessage, com.google.appengine.api.datastore.Key> key = new org.slim3.datastore.CoreAttributeMeta<com.usp.expmgmt.shared.model.ChangeLogMessage, com.google.appengine.api.datastore.Key>(this, "__key__", "key", com.google.appengine.api.datastore.Key.class);

    /** */
    public final org.slim3.datastore.StringAttributeMeta<com.usp.expmgmt.shared.model.ChangeLogMessage> logMessage = new org.slim3.datastore.StringAttributeMeta<com.usp.expmgmt.shared.model.ChangeLogMessage>(this, "logMessage", "logMessage");

    /** */
    public final org.slim3.datastore.CoreAttributeMeta<com.usp.expmgmt.shared.model.ChangeLogMessage, java.lang.Long> version = new org.slim3.datastore.CoreAttributeMeta<com.usp.expmgmt.shared.model.ChangeLogMessage, java.lang.Long>(this, "version", "version", java.lang.Long.class);

    private static final ChangeLogMessageMeta slim3_singleton = new ChangeLogMessageMeta();

    /**
     * @return the singleton
     */
    public static ChangeLogMessageMeta get() {
       return slim3_singleton;
    }

    /** */
    public ChangeLogMessageMeta() {
        super("ChangeLogMessage", com.usp.expmgmt.shared.model.ChangeLogMessage.class);
    }

    @Override
    public com.usp.expmgmt.shared.model.ChangeLogMessage entityToModel(com.google.appengine.api.datastore.Entity entity) {
        com.usp.expmgmt.shared.model.ChangeLogMessage model = new com.usp.expmgmt.shared.model.ChangeLogMessage();
        model.setActorName((java.lang.String) entity.getProperty("actorName"));
        model.setChangeMessage((java.lang.String) entity.getProperty("changeMessage"));
        model.setDate((java.lang.String) entity.getProperty("date"));
        model.setExpenseReportKey((java.lang.String) entity.getProperty("expenseReportKey"));
        model.setKey(entity.getKey());
        model.setLogMessage((java.lang.String) entity.getProperty("logMessage"));
        model.setVersion((java.lang.Long) entity.getProperty("version"));
        return model;
    }

    @Override
    public com.google.appengine.api.datastore.Entity modelToEntity(java.lang.Object model) {
        com.usp.expmgmt.shared.model.ChangeLogMessage m = (com.usp.expmgmt.shared.model.ChangeLogMessage) model;
        com.google.appengine.api.datastore.Entity entity = null;
        if (m.getKey() != null) {
            entity = new com.google.appengine.api.datastore.Entity(m.getKey());
        } else {
            entity = new com.google.appengine.api.datastore.Entity(kind);
        }
        entity.setProperty("actorName", m.getActorName());
        entity.setProperty("changeMessage", m.getChangeMessage());
        entity.setProperty("date", m.getDate());
        entity.setProperty("expenseReportKey", m.getExpenseReportKey());
        entity.setProperty("logMessage", m.getLogMessage());
        entity.setProperty("version", m.getVersion());
        entity.setProperty("slim3.schemaVersion", 1);
        return entity;
    }

    @Override
    protected com.google.appengine.api.datastore.Key getKey(Object model) {
        com.usp.expmgmt.shared.model.ChangeLogMessage m = (com.usp.expmgmt.shared.model.ChangeLogMessage) model;
        return m.getKey();
    }

    @Override
    protected void setKey(Object model, com.google.appengine.api.datastore.Key key) {
        validateKey(key);
        com.usp.expmgmt.shared.model.ChangeLogMessage m = (com.usp.expmgmt.shared.model.ChangeLogMessage) model;
        m.setKey(key);
    }

    @Override
    protected long getVersion(Object model) {
        com.usp.expmgmt.shared.model.ChangeLogMessage m = (com.usp.expmgmt.shared.model.ChangeLogMessage) model;
        return m.getVersion() != null ? m.getVersion().longValue() : 0L;
    }

    @Override
    protected void assignKeyToModelRefIfNecessary(com.google.appengine.api.datastore.AsyncDatastoreService ds, java.lang.Object model) {
    }

    @Override
    protected void incrementVersion(Object model) {
        com.usp.expmgmt.shared.model.ChangeLogMessage m = (com.usp.expmgmt.shared.model.ChangeLogMessage) model;
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
        com.usp.expmgmt.shared.model.ChangeLogMessage m = (com.usp.expmgmt.shared.model.ChangeLogMessage) model;
        writer.beginObject();
        org.slim3.datastore.json.Default encoder0 = new org.slim3.datastore.json.Default();
        if(m.getActorName() != null){
            writer.setNextPropertyName("actorName");
            encoder0.encode(writer, m.getActorName());
        }
        if(m.getChangeMessage() != null){
            writer.setNextPropertyName("changeMessage");
            encoder0.encode(writer, m.getChangeMessage());
        }
        if(m.getDate() != null){
            writer.setNextPropertyName("date");
            encoder0.encode(writer, m.getDate());
        }
        if(m.getExpenseReportKey() != null){
            writer.setNextPropertyName("expenseReportKey");
            encoder0.encode(writer, m.getExpenseReportKey());
        }
        if(m.getKey() != null){
            writer.setNextPropertyName("key");
            encoder0.encode(writer, m.getKey());
        }
        if(m.getLogMessage() != null){
            writer.setNextPropertyName("logMessage");
            encoder0.encode(writer, m.getLogMessage());
        }
        if(m.getVersion() != null){
            writer.setNextPropertyName("version");
            encoder0.encode(writer, m.getVersion());
        }
        writer.endObject();
    }

    @Override
    protected com.usp.expmgmt.shared.model.ChangeLogMessage jsonToModel(org.slim3.datastore.json.JsonRootReader rootReader, int maxDepth, int currentDepth) {
        com.usp.expmgmt.shared.model.ChangeLogMessage m = new com.usp.expmgmt.shared.model.ChangeLogMessage();
        org.slim3.datastore.json.JsonReader reader = null;
        org.slim3.datastore.json.Default decoder0 = new org.slim3.datastore.json.Default();
        reader = rootReader.newObjectReader("actorName");
        m.setActorName(decoder0.decode(reader, m.getActorName()));
        reader = rootReader.newObjectReader("changeMessage");
        m.setChangeMessage(decoder0.decode(reader, m.getChangeMessage()));
        reader = rootReader.newObjectReader("date");
        m.setDate(decoder0.decode(reader, m.getDate()));
        reader = rootReader.newObjectReader("expenseReportKey");
        m.setExpenseReportKey(decoder0.decode(reader, m.getExpenseReportKey()));
        reader = rootReader.newObjectReader("key");
        m.setKey(decoder0.decode(reader, m.getKey()));
        reader = rootReader.newObjectReader("logMessage");
        m.setLogMessage(decoder0.decode(reader, m.getLogMessage()));
        reader = rootReader.newObjectReader("version");
        m.setVersion(decoder0.decode(reader, m.getVersion()));
        return m;
    }
}