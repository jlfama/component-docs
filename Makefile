
VERSION = $(shell cat package.json | egrep 'version' | cut -f4 -d'"')
BRANCH = $(shell git rev-parse --abbrev-ref HEAD)
BUCKET = $$BUCKET

ifneq ($(BRANCH),master)
  @echo "Deploy only works on master, currently ${BRANCH}"
  exit
endif

BUCKET_URL = gs://components.picatic.com
FOLDER = $(VERSION)
LATEST = latest

deploy:
  @echo "======================================================================"
  @echo "Deploying $(BRANCH) : $(VERSION) on $(BUCKET_URL)"
  @echo "======================================================================"
  -gsutil rm -r ${BUCKET_URL}/${FOLDER}/
  gsutil -h "Cache-Control:public, max-age=60" cp -Z -r -a public-read ./app/webroot/css/* ${BUCKET_URL}/${FOLDER}/css/
  gsutil -h "Cache-Control:public, max-age=60" cp -r -a public-read ./app/webroot/fonts/* ${BUCKET_URL}/${FOLDER}/fonts/
  gsutil -h "Cache-Control:public, max-age=60" cp -r -a public-read ./app/webroot/img/* ${BUCKET_URL}/${FOLDER}/img/
  gsutil -h "Cache-Control:public, max-age=60" cp -Z -r -a public-read ./app/webroot/js/embed* ${BUCKET_URL}/${FOLDER}/js/
  gsutil -h "Cache-Control:public, max-age=60" cp -Z -a public-read ./app/webroot/js/app* ${BUCKET_URL}/${FOLDER}/js/
  gsutil -h "Cache-Control:public, max-age=60" cp -Z -r -a public-read ./app/webroot/spa/* ${BUCKET_URL}/${FOLDER}/spa/
  gsutil -h "Cache-Control:public, max-age=60" cp -Z -a public-read ./app/webroot/* ${BUCKET_URL}/${FOLDER}/

  -gsutil rm -r ${BUCKET_URL}/${LATEST}/
  gsutil -h "Cache-Control:public, max-age=60" cp -Z -r -a public-read ${BUCKET_URL}/${FOLDER}/* ${BUCKET_URL}/${LATEST}/
