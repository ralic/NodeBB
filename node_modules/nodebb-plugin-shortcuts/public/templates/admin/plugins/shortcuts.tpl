<form class="form-horizontal" id="shortcuts-settings">
  <div class="row">
    <div class="col-xs-12 col-lg-9">
      <div class="panel panel-default">
        <div class="panel-heading">[[shortcuts:name]] [[shortcuts:version]] / [[shortcuts:settings.main]]</div>
        <div class="panel-body">
          <div class="form-group">
            <label class="col-xs-12 col-sm-5 control-label"
                   for="shortcuts-shadow-color">[[shortcuts:settings.main.shadowColor]]</label>
            <div class="col-xs-12 col-sm-7">
              <input id="shortcuts-shadow-color" class="form-control" type="color" data-key="selectionColor"
                     placeholder="[[shortcuts:settings.main.shadowColor.none]]"/>
            </div>
          </div>

          <div class="form-group">
            <label class="col-xs-12 col-sm-5 control-label"
                   for="shortcuts-repeat-delay">[[shortcuts:settings.main.repeatDelay]]</label>
            <div class="col-xs-12 col-sm-7">
              <input id="shortcuts-repeat-delay" class="form-control" type="number" step="1" min="0" data-key="repeatDelay"
                     placeholder="[[shortcuts:settings.main.shadowColor.none]]"/>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="col-xs-12 col-lg-3 visible-lg">
      <div class="panel panel-default">
        <div class="panel-heading">[[plugins:actions.title]]</div>
        <div class="panel-body">
          <div class="form-group">
            <div class="col-xs-12">
              <button type="submit" class="btn btn-primary btn-block shortcuts-settings-save" accesskey="s"
                      disabled="disabled">
                <i class="fa fa-fw fa-save"></i> [[plugins:actions.save]]
              </button>
            </div>
          </div>
          <div class="form-group">
            <div class="col-xs-12">
              <button type="button" class="btn btn-warning btn-block shortcuts-settings-reset" disabled="disabled">
                <i class="fa fa-fw fa-eraser"></i> [[plugins:actions.reset]]
              </button>
            </div>
          </div>
          <div class="form-group">
            <div class="col-xs-12">
              <button type="button" class="btn btn-danger btn-block shortcuts-settings-purge" disabled="disabled">
                <i class="fa fa-fw fa-history"></i> [[plugins:actions.purge]]
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="col-xs-12">
      <div class="panel panel-default">
        <div class="panel-heading">[[shortcuts:settings.actions]]</div>
        <div class="panel-body"><div id="shortcuts-actions" class="row"></div></div>
      </div>
    </div>

    <div class="col-xs-12">
      <div class="panel panel-default">
        <div class="panel-heading">[[shortcuts:settings.adminActions]]</div>
        <div class="panel-body"><div id="shortcuts-admin-actions" class="row"></div></div>
      </div>
    </div>

    <div class="col-xs-12">
      <div class="panel panel-default">
        <div class="panel-heading">[[plugins:actions.title]]</div>
        <div class="panel-body">
          <div class="form-group">
            <div class="col-xs-12">
              <button type="submit" class="btn btn-primary btn-block shortcuts-settings-save" accesskey="s"
                      disabled="disabled">
                <i class="fa fa-fw fa-save"></i> [[plugins:actions.save]]
              </button>
            </div>
          </div>
          <div class="form-group">
            <div class="col-xs-12">
              <button type="button" class="btn btn-warning btn-block shortcuts-settings-reset" disabled="disabled">
                <i class="fa fa-fw fa-eraser"></i> [[plugins:actions.reset]]
              </button>
            </div>
          </div>
          <div class="form-group">
            <div class="col-xs-12">
              <button type="button" class="btn btn-danger btn-block shortcuts-settings-purge" disabled="disabled">
                <i class="fa fa-fw fa-history"></i> [[plugins:actions.purge]]
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</form>

<link rel="stylesheet" type="text/css" href="{relative_path}/plugins/nodebb-plugin-shortcuts/static/styles/adminSettings.css"/>
<script type="text/javascript" src="{relative_path}/plugins/nodebb-plugin-shortcuts/static/scripts/adminSettings.js"></script>
