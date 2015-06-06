package com.usp.expmgmt.server.meta;

//@javax.annotation.Generated(value = { "slim3-gen", "@VERSION@" }, date = "2015-06-06 14:50:35")
/** */
public final class UserContactMeta extends org.slim3.datastore.ModelMeta<com.usp.expmgmt.shared.model.UserContact> {

    /** */
    public final org.slim3.datastore.StringAttributeMeta<com.usp.expmgmt.shared.model.UserContact> childEmail = new org.slim3.datastore.StringAttributeMeta<com.usp.expmgmt.shared.model.UserContact>(this, "childEmail", "childEmail");

    /** */
    public final org.slim3.datastore.CoreAttributeMeta<com.usp.expmgmt.shared.model.UserContact, com.google.appengine.api.datastore.Key> key = new org.slim3.datastore.CoreAttributeMeta<com.usp.expmgmt.shared.model.UserContact, com.google.appengine.api.datastore.Key>(this, "__key__", "key", com.google.appengine.api.datastore.Key.class);

    /** */
    public final org.slim3.datastore.StringAttributeMeta<com.usp.expmgmt.shared.model.UserContact> parentEmail = new org.slim3.datastore.StringAttributeMeta<com.usp.expmgmt.shared.model.UserContact>(this, "parentEmail", "parentEmail");

    /** */
    public final org.slim3.datastore.CoreAttributeMeta<com.usp.expmgmt.shared.model.UserContact, java.lang.Long> version = new org.slim3.datastore.CoreAttributeMeta<com.usp.expmgmt.shared.model.UserContact, java.lang.Long>(this, "version", "version", java.lang.Long.class);

    private static final UserContactMeta slim3_singleton = new UserContactMeta();

    /**
     * @return the singleton
     */
    public static UserContactMeta get() {
       return slim3_singleton;
    }

    /** */
    public UserContactMeta() {
        super("UserContact", com.usp.expmgmt.shared.model.UserContact.class);
    }

    @Override
    public com.usp.expmgmt.shared.model.UserContact entityToModel(com.google.appengine.api.datastore.Entity entity) {
        com.usp.expmgmt.shared.model.UserContact model = new com.usp.expmgmt.shared.model.UserContact();
        model.setChildEmail((java.lang.String) entity.getProperty("childEmail"));
        model.setKey(entity.getKey());
        model.setParentEmail((java.lang.String) entity.getProperty("parentEmail"));
        model.setVersion((java.lang.Long) entity.getProperty("version"));
        return model;
    }

    @Override
    public com.google.appengine.api.datastore.Entity modelToEntity(java.lang.Object model) {
        com.usp.expmgmt.shared.model.UserContact m = (com.usp.expmgmt.shared.model.UserContact) model;
        com.google.appengine.api.datastore.Entity entity = null;
        if (m.getKey() != null) {
            entity = new com.google.appengine.api.datastore.Entity(m.getKey());
        } else {
            entity = new com.google.appengine.api.datastore.Entity(kind);
        }
        entity.setProperty("childEmail", m.getChildEmail());
        entity.setProperty("parentEmail", m.getParentEmail());
        entity.setProperty("version", m.getVersion());
        entity.setProperty("slim3.schemaVersion", 1);
        return entity;
    }

    @Override
    protected com.google.appengine.api.datastore.Key getKey(Object model) {
        com.usp.expmgmt.shared.model.UserContact m = (com.usp.expmgmt.shared.model.UserContact) model;
        return m.getKey();
    }

    @Override
    protected void setKey(Object model, com.google.appengine.api.datastore.Key key) {
        validateKey(key);
        com.usp.expmgmt.shared.model.UserContact m = (com.usp.expmgmt.shared.model.UserContact) model;
        m.setKey(key);
    }

    @Override
    protected long getVersion(Object model) {
        com.usp.expmgmt.shared.model.UserContact m = (com.usp.expmgmt.shared.model.UserContact) model;
        return m.getVersion() != null ? m.getVersion().longValue() : 0L;
    }

    @Override
    protected void assignKeyToModelRefIfNecessary(com.google.appengine.api.datastore.AsyncDatastoreService ds, java.lang.Object model) {
    }

    @Override
    protected void incrementVersion(Object model) {
        com.usp.expmgmt.shared.model.UserContact m = (com.usp.expmgmt.shared.model.UserContact) model;
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
        com.usp.expmgmt.shared.model.UserContact m = (com.usp.expmgmt.shared.model.UserContact) model;
        writer.beginObject();
        org.slim3.datastore.json.Default encoder0 = new org.slim3.datastore.json.Default();
        if(m.getChildEmail() != null){
            writer.setNextPropertyName("childEmail");
            encoder0.encode(writer, m.getChildEmail());
        }
        if(m.getKey() != null){
            writer.setNextPropertyName("key");
            encoder0.encode(writer, m.getKey());
        }
        if(m.getParentEmail() != null){
            writer.setNextPropertyName("parentEmail");
            encoder0.encode(writer, m.getParentEmail());
        }
        if(m.getVersion() != null){
            writer.setNextPropertyName("version");
            encoder0.encode(writer, m.getVersion());
        }
        writer.endObject();
    }

    @Override
    protected com.usp.expmgmt.shared.model.UserContact jsonToModel(org.slim3.datastore.json.JsonRootReader rootReader, int maxDepth, int currentDepth) {
        com.usp.expmgmt.shared.model.UserContact m = new com.usp.expmgmt.shared.model.UserContact();
        org.slim3.datastore.json.JsonReader reader = null;
        org.slim3.datastore.json.Default decoder0 = new org.slim3.datastore.json.Default();
        reader = rootReader.newObjectReader("childEmail");
        m.setChildEmail(decoder0.decode(reader, m.getChildEmail()));
        reader = rootReader.newObjectReader("key");
        m.setKey(decoder0.decode(reader, m.getKey()));
        reader = rootReader.newObjectReader("parentEmail");
        m.setParentEmail(decoder0.decode(reader, m.getParentEmail()));
        reader = rootReader.newObjectReader("version");
        m.setVersion(decoder0.decode(reader, m.getVersion()));
        return m;
    }
}