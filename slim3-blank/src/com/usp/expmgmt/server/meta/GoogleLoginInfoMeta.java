package com.usp.expmgmt.server.meta;

//@javax.annotation.Generated(value = { "slim3-gen", "@VERSION@" }, date = "2015-06-06 14:50:35")
/** */
public final class GoogleLoginInfoMeta extends org.slim3.datastore.ModelMeta<com.usp.expmgmt.shared.model.GoogleLoginInfo> {

    /** */
    public final org.slim3.datastore.StringAttributeMeta<com.usp.expmgmt.shared.model.GoogleLoginInfo> accessToken = new org.slim3.datastore.StringAttributeMeta<com.usp.expmgmt.shared.model.GoogleLoginInfo>(this, "accessToken", "accessToken");

    /** */
    public final org.slim3.datastore.StringAttributeMeta<com.usp.expmgmt.shared.model.GoogleLoginInfo> accessTokenSecrete = new org.slim3.datastore.StringAttributeMeta<com.usp.expmgmt.shared.model.GoogleLoginInfo>(this, "accessTokenSecrete", "accessTokenSecrete");

    /** */
    public final org.slim3.datastore.CoreAttributeMeta<com.usp.expmgmt.shared.model.GoogleLoginInfo, com.google.appengine.api.datastore.Key> key = new org.slim3.datastore.CoreAttributeMeta<com.usp.expmgmt.shared.model.GoogleLoginInfo, com.google.appengine.api.datastore.Key>(this, "__key__", "key", com.google.appengine.api.datastore.Key.class);

    /** */
    public final org.slim3.datastore.StringAttributeMeta<com.usp.expmgmt.shared.model.GoogleLoginInfo> ownerEmail = new org.slim3.datastore.StringAttributeMeta<com.usp.expmgmt.shared.model.GoogleLoginInfo>(this, "ownerEmail", "ownerEmail");

    /** */
    public final org.slim3.datastore.CoreAttributeMeta<com.usp.expmgmt.shared.model.GoogleLoginInfo, java.lang.Long> version = new org.slim3.datastore.CoreAttributeMeta<com.usp.expmgmt.shared.model.GoogleLoginInfo, java.lang.Long>(this, "version", "version", java.lang.Long.class);

    private static final GoogleLoginInfoMeta slim3_singleton = new GoogleLoginInfoMeta();

    /**
     * @return the singleton
     */
    public static GoogleLoginInfoMeta get() {
       return slim3_singleton;
    }

    /** */
    public GoogleLoginInfoMeta() {
        super("GoogleLoginInfo", com.usp.expmgmt.shared.model.GoogleLoginInfo.class);
    }

    @Override
    public com.usp.expmgmt.shared.model.GoogleLoginInfo entityToModel(com.google.appengine.api.datastore.Entity entity) {
        com.usp.expmgmt.shared.model.GoogleLoginInfo model = new com.usp.expmgmt.shared.model.GoogleLoginInfo();
        model.setAccessToken((java.lang.String) entity.getProperty("accessToken"));
        model.setAccessTokenSecrete((java.lang.String) entity.getProperty("accessTokenSecrete"));
        model.setKey(entity.getKey());
        model.setOwnerEmail((java.lang.String) entity.getProperty("ownerEmail"));
        model.setVersion((java.lang.Long) entity.getProperty("version"));
        return model;
    }

    @Override
    public com.google.appengine.api.datastore.Entity modelToEntity(java.lang.Object model) {
        com.usp.expmgmt.shared.model.GoogleLoginInfo m = (com.usp.expmgmt.shared.model.GoogleLoginInfo) model;
        com.google.appengine.api.datastore.Entity entity = null;
        if (m.getKey() != null) {
            entity = new com.google.appengine.api.datastore.Entity(m.getKey());
        } else {
            entity = new com.google.appengine.api.datastore.Entity(kind);
        }
        entity.setProperty("accessToken", m.getAccessToken());
        entity.setProperty("accessTokenSecrete", m.getAccessTokenSecrete());
        entity.setProperty("ownerEmail", m.getOwnerEmail());
        entity.setProperty("version", m.getVersion());
        entity.setProperty("slim3.schemaVersion", 1);
        return entity;
    }

    @Override
    protected com.google.appengine.api.datastore.Key getKey(Object model) {
        com.usp.expmgmt.shared.model.GoogleLoginInfo m = (com.usp.expmgmt.shared.model.GoogleLoginInfo) model;
        return m.getKey();
    }

    @Override
    protected void setKey(Object model, com.google.appengine.api.datastore.Key key) {
        validateKey(key);
        com.usp.expmgmt.shared.model.GoogleLoginInfo m = (com.usp.expmgmt.shared.model.GoogleLoginInfo) model;
        m.setKey(key);
    }

    @Override
    protected long getVersion(Object model) {
        com.usp.expmgmt.shared.model.GoogleLoginInfo m = (com.usp.expmgmt.shared.model.GoogleLoginInfo) model;
        return m.getVersion() != null ? m.getVersion().longValue() : 0L;
    }

    @Override
    protected void assignKeyToModelRefIfNecessary(com.google.appengine.api.datastore.AsyncDatastoreService ds, java.lang.Object model) {
    }

    @Override
    protected void incrementVersion(Object model) {
        com.usp.expmgmt.shared.model.GoogleLoginInfo m = (com.usp.expmgmt.shared.model.GoogleLoginInfo) model;
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
        com.usp.expmgmt.shared.model.GoogleLoginInfo m = (com.usp.expmgmt.shared.model.GoogleLoginInfo) model;
        writer.beginObject();
        org.slim3.datastore.json.Default encoder0 = new org.slim3.datastore.json.Default();
        if(m.getAccessToken() != null){
            writer.setNextPropertyName("accessToken");
            encoder0.encode(writer, m.getAccessToken());
        }
        if(m.getAccessTokenSecrete() != null){
            writer.setNextPropertyName("accessTokenSecrete");
            encoder0.encode(writer, m.getAccessTokenSecrete());
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
    protected com.usp.expmgmt.shared.model.GoogleLoginInfo jsonToModel(org.slim3.datastore.json.JsonRootReader rootReader, int maxDepth, int currentDepth) {
        com.usp.expmgmt.shared.model.GoogleLoginInfo m = new com.usp.expmgmt.shared.model.GoogleLoginInfo();
        org.slim3.datastore.json.JsonReader reader = null;
        org.slim3.datastore.json.Default decoder0 = new org.slim3.datastore.json.Default();
        reader = rootReader.newObjectReader("accessToken");
        m.setAccessToken(decoder0.decode(reader, m.getAccessToken()));
        reader = rootReader.newObjectReader("accessTokenSecrete");
        m.setAccessTokenSecrete(decoder0.decode(reader, m.getAccessTokenSecrete()));
        reader = rootReader.newObjectReader("key");
        m.setKey(decoder0.decode(reader, m.getKey()));
        reader = rootReader.newObjectReader("ownerEmail");
        m.setOwnerEmail(decoder0.decode(reader, m.getOwnerEmail()));
        reader = rootReader.newObjectReader("version");
        m.setVersion(decoder0.decode(reader, m.getVersion()));
        return m;
    }
}