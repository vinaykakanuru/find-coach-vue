<template>
  <form @submit.prevent="">
    <div class="form-control">
      <label for="firstName">FirstName</label>
      <input type="text" name="" id="firstName" />
    </div>
    <div class="form-control">
      <label for="lastName">LastName</label>
      <input type="text" name="" id="lastName" />
    </div>
    <div class="form-control">
      <label for="description">Description</label>
      <textarea id="description" row="5"></textarea>
    </div>
    <div class="form-control">
      <label for="rate">Hourly Rate</label>
      <input type="number" name="" id="rate" />
    </div>
    <div class="form-control">
      <h3>Areas of Expertise</h3>
      <div>
        <label for="frontend">Frontend Development</label>
        <input type="checkbox" name="" id="frontend" value="frontend" />
      </div>
      <div>
        <label for="backend">Backend Development</label>
        <input type="checkbox" name="" id="backend" value="backend" />
      </div>
      <div>
        <label for="career">Career Development</label>
        <input type="checkbox" name="" id="career" value="career" />
      </div>
    </div>
  </form>
</template>
