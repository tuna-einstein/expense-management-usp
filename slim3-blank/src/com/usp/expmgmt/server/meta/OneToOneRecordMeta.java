package com.usp.expmgmt.server.meta;

//@javax.annotation.Generated(value = { "slim3-gen", "@VERSION@" }, date = "2012-11-17 22:34:17")
/** */
public final class OneToOneRecordMeta extends org.slim3.datastore.ModelMeta<com.usp.expmgmt.shared.model.OneToOneRecord> {

    /** */
    public final org.slim3.datastore.CoreAttributeMeta<com.usp.expmgmt.shared.model.OneToOneRecord, java.lang.Double> amount = new org.slim3.datastore.CoreAttributeMeta<com.usp.expmgmt.shared.model.OneToOneRecord, java.lang.Double>(this, "amount", "amount", double.class);

    /** */
    public final org.slim3.datastore.CoreAttributeMeta<com.usp.expmgmt.shared.model.OneToOneRecord, com.google.appengine.api.datastore.Key> key = new org.slim3.datastore.CoreAttributeMeta<com.usp.expmgmt.shared.model.OneToOneRecord, com.google.appengine.api.datastore.Key>(this, "__key__", "key", com.google.appengine.api.datastore.Key.class);

    /** */
    public final org.slim3.datastore.StringAttributeMeta<com.usp.expmgmt.shared.model.OneToOneRecord> masterEmail = new org.slim3.datastore.StringAttributeMeta<com.usp.expmgmt.shared.model.OneToOneRecord>(this, "masterEmail", "masterEmail");

    /** */
    public final org.slim3.datastore.StringAttributeMeta<com.usp.expmgmt.shared.model.OneToOneRecord> slaveEmail = new org.slim3.datastore.StringAttributeMeta<com.usp.expmgmt.shared.model.OneToOneRecord>(this, "slaveEmail", "slaveEmail");

    /** */
    public final org.slim3.datastore.CoreAttributeMeta<com.usp.expmgmt.shared.model.OneToOneRecord, java.lang.Long> version = new org.slim3.datastore.CoreAttributeMeta<com.usp.expmgmt.shared.model.OneToOneRecord, java.lang.Long>(this, "version", "version", java.lang.Long.class);

    private static final OneToOneRecordMeta slim3_singleton = new OneToOneRecordMeta();

    /**
     * @return the singleton
     */
    public static OneToOneRecordMeta get() {
       return slim3_singleton;
    }

    /** */
    public OneToOneRecordMeta() {
        super("OneToOneRecord", com.usp.expmgmt.shared.model.OneToOneRecord.class);
    }

    @Override
    public com.usp.expmgmt.shared.model.OneToOneRecord entityToModel(com.google.appengine.api.datastore.Entity entity) {
        com.usp.expmgmt.shared.model.OneToOneRecord model = new com.usp.expmgmt.shared.model.OneToOneRecord();
        model.setAmount(doubleToPrimitiveDouble((java.lang.Double) entity.getProperty("amount")));
        model.setKey(entity.getKey());
        model.setMasterEmail((java.lang.String) entity.getProperty("masterEmail"));
        model.setSlaveEmail((java.lang.String) entity.getProperty("slaveEmail"));
        model.setVersion((java.lang.Long) entity.getProperty("version"));
        return model;
    }

    @Override
    public com.google.appengine.api.datastore.Entity modelToEntity(java.lang.Object model) {
        com.usp.expmgmt.shared.model.OneToOneRecord m = (com.usp.expmgmt.shared.model.OneToOneRecord) model;
        com.google.appengine.api.datastore.Entity entity = null;
        if (m.getKey() != null) {
            entity = new com.google.appengine.api.datastore.Entity(m.getKey());
        } else {
            entity = new com.google.appengine.api.datastore.Entity(kind);
        }
        entity.setProperty("amount", m.getAmount());
        entity.setProperty("masterEmail", m.getMasterEmail());
        entity.setProperty("slaveEmail", m.getSlaveEmail());
        entity.setProperty("version", m.getVersion());
        entity.setProperty("slim3.schemaVersion", 1);
        return entity;
    }

    @Override
    protected com.google.appengine.api.datastore.Key getKey(Object model) {
        com.usp.expmgmt.shared.model.OneToOneRecord m = (com.usp.expmgmt.shared.model.OneToOneRecord) model;
        return m.getKey();
    }

    @Override
    protected void setKey(Object model, com.google.appengine.api.datastore.Key key) {
        validateKey(key);
        com.usp.expmgmt.shared.model.OneToOneRecord m = (com.usp.expmgmt.shared.model.OneToOneRecord) model;
        m.setKey(key);
    }

    @Override
    protected long getVersion(Object model) {
        com.usp.expmgmt.shared.model.OneToOneRecord m = (com.usp.expmgmt.shared.model.OneToOneRecord) model;
        return m.getVersion() != null ? m.getVersion().longValue() : 0L;
    }

    @Override
    protected void assignKeyToModelRefIfNecessary(com.google.appengine.api.datastore.AsyncDatastoreService ds, java.lang.Object model) {
    }

    @Override
    protected void incrementVersion(Object model) {
        com.usp.expmgmt.shared.model.OneToOneRecord m = (com.usp.expmgmt.shared.model.OneToOneRecord) model;
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
        com.usp.expmgmt.shared.model.OneToOneRecord m = (com.usp.expmgmt.shared.model.OneToOneRecord) model;
        writer.beginObject();
        org.slim3.datastore.json.Default encoder0 = new org.slim3.datastore.json.Default();
        writer.setNextPropertyName("amount");
        encoder0.encode(writer, m.getAmount());
        if(m.getKey() != null){
            writer.setNextPropertyName("key");
            encoder0.encode(writer, m.getKey());
        }
        if(m.getMasterEmail() != null){
            writer.setNextPropertyName("masterEmail");
            encoder0.encode(writer, m.getMasterEmail());
        }
        if(m.getSlaveEmail() != null){
            writer.setNextPropertyName("slaveEmail");
            encoder0.encode(writer, m.getSlaveEmail());
        }
        if(m.getVersion() != null){
            writer.setNextPropertyName("version");
            encoder0.encode(writer, m.getVersion());
        }
        writer.endObject();
    }

    @Override
    protected com.usp.expmgmt.shared.model.OneToOneRecord jsonToModel(org.slim3.datastore.json.JsonRootReader rootReader, int maxDepth, int currentDepth) {
        com.usp.expmgmt.shared.model.OneToOneRecord m = new com.usp.expmgmt.shared.model.OneToOneRecord();
        org.slim3.datastore.json.JsonReader reader = null;
        org.slim3.datastore.json.Default decoder0 = new org.slim3.datastore.json.Default();
        reader = rootReader.newObjectReader("amount");
        m.setAmount(decoder0.decode(reader, m.getAmount()));
        reader = rootReader.newObjectReader("key");
        m.setKey(decoder0.decode(reader, m.getKey()));
        reader = rootReader.newObjectReader("masterEmail");
        m.setMasterEmail(decoder0.decode(reader, m.getMasterEmail()));
        reader = rootReader.newObjectReader("slaveEmail");
        m.setSlaveEmail(decoder0.decode(reader, m.getSlaveEmail()));
        reader = rootReader.newObjectReader("version");
        m.setVersion(decoder0.decode(reader, m.getVersion()));
        return m;
    }
}