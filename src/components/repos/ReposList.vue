<template>
  <div>
    <b-row>
      <b-col md="12">
        <tr class="table-responsive">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Language</th>
                <th>Details</th>
                <th>Hosted?</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="repo in repos"
                :key="repo.id">
                <td><a :href="repo.html_url" target="_blank">{{ repo.name }}</a></td>
                <td>{{ repo.language }}</td>
                <td>{{ repo.description }}</td>
                <td>
                  <a :href="repo.homepage" target="_blank" v-if="repo.homepage">Yes</a>
                  <p v-else>No</p>
                </td>
              </tr>
            </tbody>
          </table>
        </tr>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import RepoService from '@/api-services/repos.service'

export default {
  name: 'ReposList',
  data () {
    return {
      repos: []
    }
  },
  created () {
    RepoService.getAll().then((response) => {
      this.repos = response.data
    })
  }
}
</script>
