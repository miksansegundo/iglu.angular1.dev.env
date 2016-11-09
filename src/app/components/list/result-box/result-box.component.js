import styles from './result-box.css'

const name = 'resultBox'
export default window.angular
  .module(name, [])
  .component(name, {
    bindings: {
      data: '<',
      type: '<'
    },
    controller: class Ctrl {
      constructor () {
        'ngInject'
        this.env = this.setEnv()
        this.isBuild = (this.type === 'Build')
        this.isFirewall = (this.type === 'Firewall')
      }
      calcPercent (num) {
        return ((num * 158) / 100)
      }
      setEnv () {
        if (this.data.environments) {
          return this.data.environments[0]
        }
      }
    },
    template: `
      <div class="panel panel-default" ng-style="$ctrl.fail && {'border-color':'#d9534f'}">
        <div class="panel-heading">Result</div>
        <div class="panel-body ${styles.panel}">
          <section>
            <div class="text-center">     
              <section ng-if="$ctrl.isBuild">
                <strong class="${styles.label}" 
                ng-class="{
                  '${styles.acepted}': $ctrl.data.succeed,
                  '${styles.rejected}': !$ctrl.data.succeed
                }">{{ $ctrl.data.name }}</strong>
                <select class="${styles.select}" ng-if="$ctrl.data.succeed" ng-model="$ctrl.env"
                    ng-options="option.id as option.name for option in $ctrl.data.environments track by option.id">
                </select>
                <button class="btn btn-lg btn-primary" ng-if="$ctrl.data.succeed">
                   <span class="glyphicon glyphicon-ok"></span> Deploy
                </button>
                <button class="btn btn-lg btn-primary" ng-if="!$ctrl.data.succeed">
                  <span class="glyphicon glyphicon-wrench"></span> Find issues 
                </button>
              </section>
              <section ng-if="$ctrl.isFirewall">
                 <span ng-if="$ctrl.data.accepted" class="${styles.accepted}">Change Accepted</span>
                 <span ng-if="!$ctrl.data.accepted" class="${styles.rejected}">Change Rejected</span>
                <strong class="${styles.label}">{{ $ctrl.data.name }}</strong>
                <button class="btn btn-lg btn-primary" ng-if="$ctrl.data.accepted">
                   <span class="glyphicon glyphicon-eye-open"></span> Merged Build
                </button>
                <button class="btn btn-lg btn-primary" ng-if="!$ctrl.data.accepted">
                  <span class="glyphicon glyphicon-wrench"></span> Find issues 
                </button>
              </section>
            </div>
          </section>
        </div>
      </div>
    `
  })