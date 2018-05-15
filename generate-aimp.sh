bin/vitalsigns generate -o ../domain-ontology/vital-aimp-0.1.0.owl

bin/vitalsigns generate -o ../domain-ontology/vital-aimp-0.1.0.owl -t json -or

vitalmavendeploy installdomainjar -j ../domain-groovy-jar/vital-aimp-groovy-0.1.0.jar

ant -f /d/workspace_vital.ai_git/workspace_haley.ai/aimp/copy_aimp.xml

